import { IMailMessage, IMailProvider } from "../IMailProvider";
import nodemailer from 'nodemailer';

export class MailTrapMailProvider implements IMailProvider {

  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "a0098ab576589d",
        pass: "ce41ad69e79a48"
      }
    })
  }

  async sendMail(message: IMailMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email
      },
      from: {
        name: message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      body: message.body
    });
  }
}