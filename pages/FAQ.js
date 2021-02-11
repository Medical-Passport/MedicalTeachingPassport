import { Link, Typography, Container } from '@material-ui/core'
import React from 'react'

const FAQ = () => {
   return (
      <Container>
         <Typography variant='h4'>What is Medical Teaching Passport?</Typography>
         <Typography paragraph>This is a web-application for medical professionals to log activities designed to improve their clinical teaching skills. Participants will complete specific activities within certain medical education domains and record them in this tool so that passport program directors can monitor their progress and optimize mentoring.</Typography>
         <Typography variant='h4'>Contact Us</Typography>
         <Link>test@example.com</Link>
      </Container>
   )
}

export default FAQ
