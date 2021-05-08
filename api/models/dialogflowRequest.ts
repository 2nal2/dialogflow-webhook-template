export interface DialogFlowRequest {
    responseId: string;
    queryResult: QueryResult;
    originalDetectIntentRequest: OriginalDetectIntentRequest;
    session: string;
}

export interface Text {
    text: string[];
}

export interface FulfillmentMessage {
    text: Text;
}

export interface OutputContext {
    name: string;
    parameters: any;
}

export interface Intent {
    name: string;
    displayName: string;
}

export interface QueryResult {
    queryText: string;
    action: string;
    parameters: any;
    allRequiredParamsPresent: boolean;
    fulfillmentText: string;
    fulfillmentMessages: FulfillmentMessage[];
    outputContexts: OutputContext[];
    intent: Intent;
    intentDetectionConfidence: number;
    languageCode: string;
}

export interface OriginalDetectIntentRequest {
    payload: any;
    source: string;
}

export interface Payload {
    stockNumber?: string;
    source: string;
    userPlatformId: string;
    integrationId: string;
    companyCode?: number;
}