import axios, {AxiosResponse, AxiosError} from "axios";
import Discord from "discord.js";
import Config from "../components/Config";
import { ApiCheckConfig } from "../types/ApiCheckConfig";

export default class DiscordService {
    private static config: ApiCheckConfig = Config.GetConfigFromFile();

    public static SendMessage(message: string) {
        
    }

    public static SendEmbedMessage() {

    }
}