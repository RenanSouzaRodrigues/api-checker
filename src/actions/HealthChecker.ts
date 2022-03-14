import fetch from "node-fetch";
import { Response } from "node-fetch";
import { ApiCheckConfig } from "../types/ApiCheckConfig";
import { ApiDescription } from "../types/ApiDescription";

export default class HealthChecker {
    public static CheckApisEndpoints(apiCheckConfig: ApiCheckConfig): void {
        apiCheckConfig.apiEndpoints.forEach(async (api) => {
            const response = await fetch(api.endpoint);
            if(api.requiredStatus && response.status != api.requiredStatus) {    
                this.ConsoleErrorResponse(response, api);
                if(apiCheckConfig.discord.notify) {
                    // call discord notification
                }
            }
        });
    }

    private static ConsoleErrorResponse(response: Response, apiDescription: ApiDescription): void {
        console.log(
            "Could not establish connection with server :: ", 
            `Error trying to reach api ${apiDescription.apiName} on endpoint: ${apiDescription.endpoint}`
        );
        console.log(`Got response status ${response.status}`);
        console.log(`Response :: `, response.json());
    }
}