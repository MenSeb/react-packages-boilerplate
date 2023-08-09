import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import nodemailer, { SendMailOptions } from 'nodemailer';
import { log } from 'console';
import 'dotenv/config';

export type ContactMailRequest = Omit<Request, 'body'> & {
  body: {
    email: string;
    firstname: string;
    lastname: string;
    project: string;
    website: string;
  };
};

const app = express();
const port = 3001;

const transporter = nodemailer.createTransport({
  host: process.env.NODE_MAILER_HOST,
  port: Number(process.env.NODE_MAILER_PORT),
  auth: {
    user: process.env.NODE_MAILER_USERNAME,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  log(`Listening on port: ${port}`);
});

app.post('/form-contact', function (req: ContactMailRequest, res: Response) {
  const { body } = req;

  const sendMailOptions: SendMailOptions = {
    from: body.email,
    to: process.env.NODE_MAILER_EMAIL,
    subject: `${body.website} - ${body.firstname}, ${body.lastname}`,
    text: body.project,
  };

  transporter.sendMail(sendMailOptions, function (error, data) {
    res.json(error ? error : { data });
  });
});
