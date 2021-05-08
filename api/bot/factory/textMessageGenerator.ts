import IMessageGenerator from './iMessageGenerator';
import QuickReply from './models/quickReply';
import Card from './models/card';
import DateTimePicker from './models/dateTimePicker';

export default class TextMessageGenerator implements IMessageGenerator {

    constructor() {
    }

    createCard(card: Card): object {
        let message = `${card.title} - ${card.subtitle}`;

        card.buttons.forEach(x => {
            message += `\n ${x.text}`
        });

        return this.createText(message);
    }

    createText(text: string): object {
        return {
            text: {
                text: [text]
            }
        };
    }
    createQuickReplies(title: string, options: QuickReply[]): object[] {
        let message = title;

        options.forEach(option => {
            message += `\n- ${option.title}`;
        });

        return [{
            text: {
                text: [message]
            }
        }];
    }

    createDateTimePicker(picker: DateTimePicker) {
        return {
            text: {
                text: [""]
            }
        };
    }
}
