import { CardButtonType } from "../enums/cardButtonType";

export default interface CardButton {
    type: CardButtonType;
    text: string;
    postback: string;
}