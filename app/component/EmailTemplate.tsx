import { Message } from 'emailjs';
import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, message
}) => (
  <div className='m-10'>
    <h1 className='font-dela'>Welcome, {firstName}!</h1>
    <h2>Your message to me is as below:</h2>
    <div><p>{message}</p></div>
    <p>Thank you for your message, I will assess your submission and get back to you as soon as possible. Looking forward to training with you!</p>
  </div>
);