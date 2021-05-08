import QuickReply from "./models/quickReply";
import Card from "./models/card";
import DateTimePicker from "./models/dateTimePicker";

export default interface IMessageGenerator {
    createText(text: string): object;
    createQuickReplies(title: string, options: QuickReply[]): object;
    createCard(card: Card): object;
}