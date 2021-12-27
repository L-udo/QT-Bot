const Discord = require('discord.js');
require('dotenv').config();
var cute_usrs = [];
const cute_msgs = ["The Cutie has Spoken!", "Hey! Did you know you were a ||***CUTIE!***||", "Warning, this person is a Confirmed ||***CUTE!***||"];

const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]
});


client.on('ready', () => {
    console.log(client.user.tag);
    client.user.setActivity("Calling People Cute");
});


client.on('messageCreate', message => {

    if (message.content.includes("!qt add")) {


        let admention = message.mentions.users.first();
        if (admention) {
            cute = client.users.cache.find(user => user.id == admention.id);
            cute_usrs.push(cute.username);
            message.channel.send('OwO');

        } else if (admention === undefined) {
            message.channel.send("Uh oh, it looks like you mistyped the command... \nThe correct format is `qt add/dell @username`");
        }

        console.log(cute_usrs);
    }


    else if (message.content.includes("!qt del")) {


        let delmention = message.mentions.users.first();
        if (delmention) {
            cute = client.users.cache.find(user => user.id == delmention.id)

            cute_usrs = cute_usrs.filter(rm_cute);
            function rm_cute() {
                return cute_usrs != cute.username;
            }
            message.channel.send('UwU');

        } else if (delmention === undefined) {
            message.channel.send("Uh oh, it looks like you mistyped the command... \nThe correct format is `qt add/dell @ username`");
        }
        console.log(cute_usrs);
    }
});




client.on('messageCreate', message => {

    if (message.content.includes("!qt")) {


    } else if (cute_usrs.includes(message.author.username) && Math.floor(Math.random() * 70) === 3) {

        message.reply(cute_msgs[Math.floor(Math.random() * 3)]);
    };
});







client.login(process.env.TOKEN);