/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { DialogFlowRequest } from '../models/dialogflowRequest';
import DialogflowResponse from '../models/dialogflowResponse';
import Bot from './bot';

export default class BotRunner {
  static async run(request: DialogFlowRequest): Promise<DialogflowResponse> {
    const bot = new Bot(request);
    console.log(request.queryResult.action);
    switch (request.queryResult.action) {
      case "test":
        await bot.testComponents();
        break;
    }

    bot.response.format(request);
    return bot.response;
  }
}
