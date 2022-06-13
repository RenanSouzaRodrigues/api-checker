import { ApiDescription } from "./ApiDescription";
import { NotificationChannelConfig } from "./NotificationChannelConfig";

export type ApiCheckConfig = {
    useCronSchedule: boolean,
    cronSchedule: string,
    apiEndpoints: ApiDescription[],
    discord : NotificationChannelConfig,
}