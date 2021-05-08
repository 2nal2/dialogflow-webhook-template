// const QuickReplyType = require('./enums/quickReplyType');
import IMessageGenerator from './iMessageGenerator';
import QuickReply from './models/quickReply';
import Card from './models/card';

export default class GoogleActionsGenerator implements IMessageGenerator {

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
            "payload": {
                "google": {
                    "expectUserResponse": true,
                    "richResponse": {
                        "items": [
                            {
                                "simpleResponse": {
                                    "textToSpeech": text,
                                }
                            }
                        ]
                    }
                }
            }
        }
    }

    createQuickReplies(title: string, options: QuickReply[]): object[] {
        return [{
            "payload": {
                "google": {
                    "expectUserResponse": true,
                    "richResponse": {
                        "items": [
                            {
                                "simpleResponse": {
                                    "textToSpeech": title,
                                },
                            },
                        ],
                        "suggestions": options.map(x => ({ title: x.title }))
                    }
                }
            }
        },
        ]
    }
}
