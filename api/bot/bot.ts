/* eslint-disable consistent-return */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import DialogflowResponse from '../models/dialogflowResponse';
import MesageFactory from './factory/messageFactory';
import QuickReply from './factory/models/quickReply';
import { QuickReplyType } from './factory/enums/quickReplyType';
import DialogflowOutputContext from '../models/dialogflowOutputContext';
import IMessageGenerator from './factory/iMessageGenerator';
import { DialogFlowRequest, OutputContext, Payload } from '../models/dialogflowRequest';
import BotUtility from './botUtilities';
import Card from './factory/models/card';
import CardButton from './factory/models/cardButton';
import { CardButtonType } from './factory/enums/cardButtonType';

export default class Bot {
  request: DialogFlowRequest;
  payload: Payload;
  response: DialogflowResponse;
  msgGenerator: IMessageGenerator;
  utility: BotUtility;

  constructor(request: DialogFlowRequest) {
    this.request = request;
    this.response = new DialogflowResponse();
    const source = 'android';//request.originalDetectIntentRequest.source || request.originalDetectIntentRequest.payload.source;
    this.msgGenerator = MesageFactory(source);
    this.utility = new BotUtility(request);
    this.payload = request.originalDetectIntentRequest.payload;
  }

     /**
     * @call
     */
      async testComponents() {
        this.response.fulfillmentMessages.push(this.msgGenerator.createText("Texto de prueba"));
  
        const card: Card = <Card>{
          title: 'test',
          subtitle: 'test subtitle',
          imageUri: 'https://dealermade-io.s3.amazonaws.com/vehicle_pictures/57425277/medium_132b7f0e-2909-4cdf-9f8a-6927efc57e5d.jpg',
          buttons: [
                  <CardButton>{
                    type: CardButtonType.POSTBACK,
                    text: 'select',
                    postback: 'I want to buy',
                  },
                  <CardButton>{
                    type: CardButtonType.URL,
                    text: 'view',
                    postback: 'https://www.floridafinecars.com/carsforsale/2016-Honda-Civic-Coupe-HOLLYWOOD-FL-Stock=110702',
                  },
          ],
        };
  
        this.response.fulfillmentMessages.push(this.msgGenerator.createCard(card));
        this.response.fulfillmentMessages.push(this.msgGenerator.createCard(card));
        this.response.fulfillmentMessages.push(this.msgGenerator.createCard(card));
  
        this.response.outputContexts.push(<DialogflowOutputContext>{
          lifespanCount: 1,
          name: 'test',
        });
  
        const options: Array<QuickReply> = [
          new QuickReply(QuickReplyType.TEXT, "Shi", "si"),
          new QuickReply(QuickReplyType.TEXT, "no", "no"),
          new QuickReply(QuickReplyType.URL, `Amame`, "http://www.nyan.cat/"),
        ];

        this.response.fulfillmentMessages.push(this.msgGenerator.createQuickReplies("esta es una pregunta, me quieres?", options));
        console.log("action test executed");
      }
}
