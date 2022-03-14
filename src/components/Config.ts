import fs from "fs";
import { ApiCheckConfig } from "../types/ApiCheckConfig";

export default class Config {
    public static GetConfigFromFile(): ApiCheckConfig {
        const config = fs.readFileSync("apicheck.config.json", "utf-8");
        return JSON.parse(config);
    }
}