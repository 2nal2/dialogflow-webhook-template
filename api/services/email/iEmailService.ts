import IEmail from "./iEmail";

export default interface IEmailService{
    send(mail: IEmail): Promise<boolean>;
}