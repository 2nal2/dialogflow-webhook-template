import IEmail from './iEmail';
import IEmailService from './iEmailService';
const sengrid = require('@sendgrid/mail');

export default class EmailService implements IEmailService {
    constructor() {
        sengrid.setApiKey(process.env.SENDGRID_API_KEY);
    }

    async send(mail: IEmail): Promise<boolean> {
        try {
            await sengrid.send(mail);
            return true;
        } catch(error) {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
              }
              
            return false;
        }
    }

}