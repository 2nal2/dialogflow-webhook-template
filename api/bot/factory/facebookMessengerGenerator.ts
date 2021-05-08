import IMessageGenerator from './iMessageGenerator';
import QuickReply from '../factory/models/quickReply';
import Card from './models/card';
import DateTimePicker from './models/dateTimePicker';

export default class FacebookMessageGenerator implements IMessageGenerator {

    constructor() {
    }

    createText(text: string): object {
        return {
            text: {
                text: [text]
            }
        };
    }

    createQuickReplies(title: string, options: QuickReply[]): object[] {
        const replies: object[] = [];

        options.forEach(option => {
            let reply = {
                content_type: option.type,
                title: option.title,
                payload: option.postback
            };

            replies.push(reply);
        });

        return [{
            payload: {
                facebook: {
                    text: title,
                    quick_replies: replies
                }
            }
        }];
    }

    createCard(card: Card): object {
        return {
            card: {
                title: card.title,
                subtitle: card.subtitle,
                imageUri: card.imageUri,
                buttons: card.buttons.map(x => {
                    return {
                        text: x.text,
                        postback: x.postback
                    }
                })
            }
        };
    }

    createDateTimePicker(picker: DateTimePicker) {
        return {
            text: {
                text: []
            }
        };
    }
}


// exports.createReconnectButton = function (title, button) {
//     return {
//         type: 4,
//         platform: "facebook",
//         payload: {
//             facebook: {
//                 attachment: {
//                     type: "template",
//                     payload: {
//                         template_type: "button",
//                         text: title,
//                         buttons: [
//                             {
//                                 type: "postback",
//                                 title: button,
//                                 payload: "reconectar bot"
//                             }
//                         ]
//                     }
//                 }
//             }
//         }
//     };
// }

// exports.createImage = function (imageUrl) {
//     return {
//         type: 3,
//         platform: "facebook",
//         imageUrl: imageUrl
//     };
// }