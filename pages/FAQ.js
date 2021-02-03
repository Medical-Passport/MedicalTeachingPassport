import { Link, Typography, Container } from '@material-ui/core'
import React from 'react'

const FAQ = () => {
   return (
      <Container>
         <Typography variant='h4'>What is Medical Teaching Passport?</Typography>
         <Typography paragraph>Medical Teaching Passport is ...</Typography>
         <Typography variant='h4'>Contact Us</Typography>
         <Link>test@example.com</Link>
      </Container>
   )
}

export default FAQ
