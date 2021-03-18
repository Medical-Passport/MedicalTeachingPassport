import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
   res.statusCode = 200

   // adjust content to accept details from response object
   let mailContent = {
      from: 'support@passporttoclinicalteaching.com',
      to: `${process.env.TEST_EMAIL}`,
      subject: 'Testing Email Forwarding',
      text: 'testing...',
      html: '<p>testing...</p>'
   }

   sgMail
      .send(mailContent)
      .then(() => {
         // console.log(`Sent!`);
      })
      .catch((err) => {
         console.error(err);
      });
   res.end();
}