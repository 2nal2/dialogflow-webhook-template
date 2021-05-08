export default interface IEmail{
    to: string;
    from: string;
    subject: string;
    cc?: Array<{email: string}>;
    html?: string;
    text?: string;
}