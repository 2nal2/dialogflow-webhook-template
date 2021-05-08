import QuickReply from './factory/models/quickReply';
import { QuickReplyType } from './factory/enums/quickReplyType';
import { DialogFlowRequest } from '../models/dialogflowRequest';
import { Contexts } from './contexts';
import BotUtility from './botUtilities';

export default class FrequentMessages {
    request: DialogFlowRequest;

    constructor(request: DialogFlowRequest) {
      this.request = request;
    }
        
}
