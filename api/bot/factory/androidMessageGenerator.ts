// const QuickReplyType = require('./enums/quickReplyType');
import IMessageGenerator from './iMessageGenerator';
import QuickReply from './models/quickReply';
import Card from './models/card';
import DateTimePicker from './models/dateTimePicker';

export default class AndroidMessageGenerator implements IMessageGenerator {

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
                text: option.title,
                postback: option.postback
            };

            replies.push(reply);
        });

        return {
            payload: {
                type: "quick_reply",
                text: title,
                replies: replies
            }
        };
    }

    createCard(card: Card): object {
        return {
            payload: {
                type: "card",
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
                type: "datetime_picker",
                ...picker
            }
        }
    }
}
