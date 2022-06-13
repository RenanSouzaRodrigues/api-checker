import { DiscordAPIError } from "discord.js";
import fetch from "node-fetch";
import Discord from "discord.js";
import { ApiCheckConfig } from "../types/ApiCheckConfig";
import { ApiDescription } from "../types/ApiDescription";

export default class HealthCheckeCommand {
    public static CheckApisEndpoints(client: Discord.Client): void {
        
    }

    private static async ConsoleErrorResponse(response: Response, apiDescription: ApiDescription): Promise<void> {
        console.log(
            "Could not establish connection with server :: ", 
            `Error trying to reach api ${apiDescription.apiName} on endpoint: ${apiDescription.endpoint}`
        );
        console.log(`Got response status ${response.status}`);
        try {
            console.log(`Response :: `, await response.json());
        } catch (error) {
            console.log("Also, response could not be read properly :: ", error)
        }
    }
}