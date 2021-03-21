import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
   // adjust content to accept details from response object
   // console.log(req.body)
   const body = JSON.parse(req.body)
   
   // modify text and html to include name and email
   let mailContent = {
      from: 'support@passporttoclinicalteaching.com',
      to: `${process.env.TEST_EMAIL}`,
      subject: 'Support Ticket Submission',
      text: `FROM: "${body.name}" <${body.email}>\nTIME: ${new Date().toLocaleString()}\n${body.body}`,
      html: `<p>FROM: &quot;${body.name}&quot; &lt;${body.email}&gt;</p><p>TIME: ${new Date().toLocaleString()}</p><p>${body.body}</p>`
   }
   console.log(mailContent)

   sgMail
      .send(mailContent)
      .then(() => {
         // console.log(`Sent!`);
      })
      .catch((err) => {
         // console.error(err);
      });

   res.status(200).send("Sent!");
}