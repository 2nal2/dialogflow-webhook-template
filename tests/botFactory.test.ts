import messageFactory from '../api/bot/factory/messageFactory';
import FacebookMessageGenerator from '../api/bot/factory/facebookMessengerGenerator';
import WebMessageGenerator from '../api/bot/factory/webMessageGenerator';
import TextMessageGenerator from '../api/bot/factory/textMessageGenerator';

describe('Bot factory', ()=> {
    it('should create a facebook factory', () => {
        const source = "facebook";

        expect(messageFactory(source)).toBeInstanceOf(FacebookMessageGenerator);
    });

    it('should create a web factory', () => {
        const source = "web";

        expect(messageFactory(source)).toBeInstanceOf(WebMessageGenerator);
    });

    it('should create a text default factory', () => {
        let source = "";
        expect(messageFactory(source)).toBeInstanceOf(TextMessageGenerator);
        source = "random_platform";
        expect(messageFactory(source)).toBeInstanceOf(TextMessageGenerator);
    });
});
