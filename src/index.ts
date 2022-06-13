import Config from "./components/Config";
import { schedule } from "node-cron";

import Discord, { Intents } from "discord.js";
import Commander from "./commands/Commander";

const config = Config.GetConfigFromFile();

const discordClient = new Discord.Client({intents: [Intents.FLAGS.GUILDS]});

discordClient.on("ready", () => console.log("Bot is running"));
discordClient.on("interactionCreate", (interaction) => {
    if(!interaction.isCommand()) return;
    Commander.RunCommand(interaction.command)
})

discordClient.login(config.discord.botToken);

if(config.useCronSchedule) {
    console.log("Starting process")
    schedule(config.cronSchedule, () => {
        console.log("Running automated health checks");
    });
}
