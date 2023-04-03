interface IMailAddress {
  email: string;
  name: string;
};

export interface IMailMessage {
  to: IMailAddress;
  from: IMailAddress;
  subject: string;
  body: string;
};

export interface IMailProvider {
  sendMail(message: IMailMessage): Promise<void>;
};