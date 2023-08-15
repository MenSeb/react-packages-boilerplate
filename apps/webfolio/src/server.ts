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

const transporter = nodemailer.createTransport({
  host: process.env.NODE_MAILER_HOST,
  port: Number(process.env.NODE_MAILER_PORT),
  auth: {
    user: process.env.NODE_MAILER_USERNAME,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors());
app.use(bodyParser.json());

app.get('/webfolio', (req, res) => {
  res.send('Hello World!');
  log('Hello World! WebFolio!');
});

app.listen(port, () => {
  log(`Listening on port: ${port}`);
});

function sendMailContact(req: ContactMailRequest, res: Response) {
  const { body } = req;

  const sendMailOptions: SendMailOptions = {
    from: body.email,
    to: process.env.NODE_MAILER_EMAIL,
    subject: `${body.firstname}, ${body.lastname} - ${body.website}`,
    text: body.project,
  };

  transporter.sendMail(sendMailOptions, function (error, info) {
    log('request received', { error, info });

    res.json(error ? { error } : { info });
  });
}

function sendMailUser(req: ContactMailRequest, res: Response) {
  const { body } = req;

  transporter.sendMail(
    {
      from: process.env.NODE_MAILER_EMAIL,
      to: body.email,
      subject: `request received - ${body.website}`,
    },
    function (error, info) {
      log('user notified', { error, info });

      res.json({ error, info });
    },
  );
}

app.post(
  '/webfolio/api/contact',
  function (req: ContactMailRequest, res: Response) {
    sendMailContact(req, res);

    sendMailUser(req, res);
  },
);
