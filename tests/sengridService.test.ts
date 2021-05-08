import EmailService from '../api/services/email/emailService';
import IEmail from '../api/services/email/iEmail';


beforeAll(() => { 
    require('dotenv').config(); 
});

describe('Mail service (sengrid)', () => {
    it('should send email with cc', async () => {
        const mail = new EmailService();

        const result = await mail.send(<IEmail>{
            to: "donaldov7@gmail.com",
            from: "donaldo.vargas@ahinko.com",
            cc: [
                { email: "donaldo.vargas@ahinko.com" }
            ],
            subject: "Lead",
            text: "content test"
        });
        expect(result).toBe(true);
    });

    it('should send email without cc', async () => {
        const mail = new EmailService();

        const result = await mail.send(<IEmail>{
            to: "donaldov7@gmail.com",
            from: "donaldo.vargas@ahinko.com",
            subject: "Lead",
            text: "content test wihtout cc"
        });
        expect(result).toBe(true);
    });
});
