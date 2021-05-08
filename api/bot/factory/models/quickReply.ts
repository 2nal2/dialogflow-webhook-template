import { QuickReplyType } from '../enums/quickReplyType';

export default class QuickReply {
    type: string;
    title: string;
    postback: string;

    constructor(type: QuickReplyType, title: string, postback: string) {
        this.type = type;
        this.title = title;
        this.postback = postback;
    }
}