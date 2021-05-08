import DialogflowOutputContext from "./dialogflowOutputContext";

export default class DialogflowResponse {
    fulfillmentMessages:any[];
    outputContexts: DialogflowOutputContext[];
    followupEventInput: object | null;
    payload: object | null;
    
    constructor() {
        this.fulfillmentMessages = [];
        this.outputContexts = [];
        this.followupEventInput = null;
        this.payload = null;
    }

    format(request: any) {
        if (this.outputContexts != null) {
            this.outputContexts = this.outputContexts.map(x => {
                x.name = request.session + "/contexts/" + x.name;
                return x;
            });
        }
    }
}