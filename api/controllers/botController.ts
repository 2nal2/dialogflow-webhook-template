/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import { DialogFlowRequest } from '../models/dialogflowRequest';
import BotRunner from '../bot/botRunner';

exports.bot = async (req: any, res: any) => {
  res.send(await BotRunner.run(req.body as DialogFlowRequest));
};
