import cors from 'cors';
import express, { Request, Response } from 'express';
import nodemailer, { SendMailOptions } from 'nodemailer';
import { log } from 'console';
import 'dotenv/config';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

type ContactMailGmail = Omit<Express.Request, 'body'> & {
  body: {
    Nom: string;
    Courriel: string;
    Telephone: string;
    Adresse: string;
    Note: string;
  };
};

const transporterGMAIL = nodemailer.createTransport({
  host: process.env.GMAIL_HOST,
  port: Number(process.env.GMAIL_PORT),
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

function sendMailGmail(req: ContactMailGmail, res: Response) {
  const { body, file } = req;

  const sendMailOptions: SendMailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    cc: body.Courriel,
    subject: 'Message sent with GMAIL',
    text: `
      Nom : ${body.Nom}
      Courriel : ${body.Courriel}
      Telephone : ${body.Telephone}
      Adresse : ${body.Adresse}
      Note : ${body.Note}
    `,
    attachments: [
      {
        filename: file?.originalname,
        content: file?.buffer,
      },
    ],
  };

  transporterGMAIL.sendMail(sendMailOptions, function (error, info) {
    log('TRANSPORTER sendMailGmail', { error, info });

    res.json({ error, info });
  });
}

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

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  log(`Listening on port: ${port}`);
});

app.get('/webfolio', (req, res) => {
  res.send('Hello World!');
  log('Hello World! WebFolio!');
});

app.post(
  '/webfolio/api/contact',
  function (req: ContactMailRequest, res: Response) {
    sendMailContact(req, res);

    sendMailUser(req, res);
  },
);

app.post(
  '/webfolio/api/carriere',
  upload.single('File'),
  function (req: ContactMailGmail, res: Response) {
    log('POST sendMailGmail');

    sendMailGmail(req, res);
  },
);
