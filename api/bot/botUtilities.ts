import { DialogFlowRequest, OutputContext } from "../models/dialogflowRequest";
import { Contexts } from "./contexts";
import { omitKeyBy } from "../util/objectUtilities";

export default class BotUtility {
    request: DialogFlowRequest;

    constructor(request: DialogFlowRequest) {
        this.request = request;
    }

    getContext(name: string): OutputContext | undefined {
        const regex = new RegExp(`\/${name}$`, 'i');
        return this.request.queryResult.outputContexts.find(x => regex.test(x.name));
    }

    hasParameter(name: Contexts | string, key: string) {
        const context = this.getContext(name);

        if (!!!context)
            return false;

        return !!context.parameters && Object.prototype.hasOwnProperty.call(context.parameters, key) && String(context.parameters[key]) !== "";
    }

    contextHasParameter(context: OutputContext, key: string) {
        return !!context.parameters && Object.prototype.hasOwnProperty.call(context.parameters, key) && String(context.parameters[key]) !== "";
    }

    mergeAllContexts(): OutputContext {
        return this.request.queryResult.outputContexts.reduce((prev: OutputContext, next: OutputContext) => {
            const parameters = {
                ...(prev.parameters || {}),
                ...(next.parameters || {})
            };

            return <OutputContext>{
                name: "full",
                parameters
            };
        });
    }

    mergeAndCleanParameters(): OutputContext {
        const context = this.mergeAllContexts();
        const result = omitKeyBy(context.parameters, (key: string) => {
            return /\.|\-/.test(key);
        });

        const { customerName, ...parameters } = (result as any);

        const newParameters = {
            ...parameters
        };

        if (customerName?.name)
            newParameters.firstName = customerName?.name;

        return <OutputContext>{
            name: context.name,
            parameters: newParameters
        };
    }

}