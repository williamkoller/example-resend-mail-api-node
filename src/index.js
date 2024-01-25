import express from 'express';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT;
const resendApiKey = process.env.RESEND_API_KEY;

app
  .get('/mail/:name', async (req, res) => {
    const name = req.params.name;

    const resend = new Resend(`${resendApiKey}`);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['williamkoller30@gmail.com'],
      subject: 'Welcome 041 Code Koller',
      text: 'it works',
      html: `<p>Hello ${name}</p>`,
      tags: [
        {
          name: 'category',
          value: 'confirm_email',
        },
      ],
    });

    res.send({
      message: 'Email sent',
    });

    console.log('Email sent');
  })
  .listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });
