import IMessageFactory from './iMessageGenerator';
import FacebookMessengerGenerator from './facebookMessengerGenerator';
import WebMessageGenerator from './webMessageGenerator';
import TextMessageGenerator from './textMessageGenerator';
import GoogleActionsGenerator from './googleActionsGenerator';
import AndroidMessageGenerator from './androidMessageGenerator';

export default function (platform: string): IMessageFactory {
    switch (platform) {
        case "facebook":
            return new FacebookMessengerGenerator();
        case "web":
            return new WebMessageGenerator();
        case "android":
            return new AndroidMessageGenerator();
        case "google":
            return new GoogleActionsGenerator();
    }

    return new TextMessageGenerator();
}