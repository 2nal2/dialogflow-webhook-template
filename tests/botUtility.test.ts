import { DialogFlowRequest } from '../api/models/dialogflowRequest';
import BotUtility from '../api/bot/botUtilities';

const request = <DialogFlowRequest>{
    responseId: "",
    queryResult: {
    }
};

request.queryResult.outputContexts = [
    {
        name: "context/_test",
        parameters: {}
    },
    {
        name: "context/test",
        parameters: {
            parameter1: "test"
        }
    },
    {
        name: "context/test_1",
        parameters: {}
    },
    {
        name: "context/test_2",
        parameters: {
            model: "test",
            "model.original": "test"
        }
    },
    {
        name: "projects/demoffc-snvsvy/agent/sessions/5133e222-17d9-b350-26d0-44f0c300a40a/contexts/search_car",
        parameters: {}
    }
];

describe('Bot Utility', () => {
    it('should get a context', () => {
        const name = "test";
        const utility = new BotUtility(request);
        const context = utility.getContext(name);
        expect(context).not.toBeUndefined();
        expect(context?.parameters.parameter1).toEqual("test");
    });

    it('should not get a context', () => {
        const name = "x";
        const utility = new BotUtility(request);
        const context = utility.getContext(name);
        expect(context).toBeUndefined();
    });

    it('should get a context', () => {
        const name = "search_car";
        const utility = new BotUtility(request);
        const context = utility.getContext(name);
        expect(context).not.toBeUndefined();
    });

    it('should merge all the contexts', () => {
        const utility = new BotUtility(request);
        const context = utility.mergeAllContexts();
        expect(context).not.toBeUndefined();
        expect(context).not.toBeNull();

        expect(context.parameters.model).toBe("test");
        expect(context.parameters.parameter1).toBe("test");
        expect(Object.keys(context.parameters).length).toBe(3);
    });

    it('should merge all the contexts and clean doted and dashed keys', () => {
        const utility = new BotUtility(request);
        const context = utility.mergeAndCleanParameters();
        expect(context).not.toBeUndefined();
        expect(context).not.toBeNull();

        expect(context.parameters.model).toBe("test");
        expect(context.parameters.parameter1).toBe("test");
        expect(Object.keys(context.parameters).length).toBe(2);
    });
});
