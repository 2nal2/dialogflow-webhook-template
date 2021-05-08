import CardButton from "./cardButton";

export default interface Card{
    title: string;
    subtitle: string;
    imageUri: string;
    buttons: CardButton[];
}