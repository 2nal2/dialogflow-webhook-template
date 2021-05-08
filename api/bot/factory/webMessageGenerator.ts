// const QuickReplyType = require('./enums/quickReplyType');
import IMessageGenerator from './iMessageGenerator';
import QuickReply from './models/quickReply';
import Card from './models/card';
import DateTimePicker from './models/dateTimePicker';

export default class WebMessageGenerator implements IMessageGenerator {

    constructor() {
    }

    createText(text: string): object {
        return {
            text: {
                text: [text]
            }
        };
    }

    createQuickReplies(title: string, options: QuickReply[]): object {
        const replies: object[] = [];

        options.forEach(option => {
            let reply = {
                type: option.type,
                title: option.title,
                payload: option.postback
            };

            replies.push(reply);
        });

        return {
            payload: {
                message: "quick_reply",
                text: title,
                replies: replies
            }
        };
    }

    createCard(card: Card): object {
        return {
            payload: {
                message: "card",
                title: card.title,
                subtitle: card.subtitle,
                imageUri: card.imageUri,
                buttons: card.buttons.map(x => {
                    return {
                        type: x.type,
                        text: x.text,
                        postback: x.postback
                    }
                })
            }
        };
    }

    createDateTimePicker(picker: DateTimePicker){
        return {
            payload: {
                message: "datetime_picker",
                ...picker
            }
        }
    }
}
