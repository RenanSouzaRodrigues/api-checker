import { ApiDescription } from "./ApiDescription";
import { NotificationChannelConfig } from "./NotificationChannelConfig";

export type ApiCheckConfig = {
    cronSchedule: string,
    apiEndpoints: ApiDescription[],
    discord : NotificationChannelConfig,
}