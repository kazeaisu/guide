const Discord = require("discord.js");
const client = new Discord.Client();
const guide = require("./guide.json");
client.on('guildMemberAdd', message => {
    const channel = message.guild.channels.get('511515680500088842');
    if (!channel) return
    function checkMembers(guild) {
      let memberCount = 0
      guild.members.forEach(member => {
        if(!member.user.bot) memberCount++
      })
      return memberCount
    }
    var nowTime = new Date();
    let embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(` 参加した日時は`+ nowTime + `です`)
    .setAuthor(`${message.user.tag}さんが参加しました!` )
    .setDescription(`${message.user.tag}さんよろしくお願いします！\nこのサーバーの現在の人数は` + message.guild.memberCount + '人です')
    .setFooter(`${message.user.createdAt}に作られたアカウントです。`);
      channel.send(embed);
  });
  client.on('guildMemberRemove', message => {
    const channel = message.guild.channels.get('511515680500088842')
    if (!channel) return
    channel.send({embed: {
      setColor:'0x' + Color,
    title: `${message.user.tag}さんが退出しました`,
    description: `ご利用ありがとうございました.`,
    setFooter:`現在の${message.guild.name}の人数は` +message.guild.memberCount + `人です。`,
    timestamp: new Date(),
    footer: {
      icon_url: message.user.avatarURL,
    }
    }
    })
  });
  client.on("ready", (message) => {
    console.log(`${client.user.username}がログインしました！ あと 合計${client.users.size} ユーザー, そして合計${client.channels.size} チャンネル そして合計 ${client.guilds.size}サーバーで動いてるよ！.`);
    console.log(' _   _        _  _ \n\
                 | | | |      | || | \n \
                 | |_| |  ___ | || |  ___  \n\
                 |  _  | / _ \| || | / _ \ \n\
                 | | | ||  __/| || || (_) |\n\
                 \_| |_/ \___||_||_| \___/')
    client.user.setActivity(guide.prefix+"help"+`|Xmas!|${client.guilds.size}サーバーで稼働中`);
  });
  client.on("message", async message => {
    if(message.content.indexOf(config.prefix) !== 0) return;
    if (message.author.bot || !message.guild) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === "help"){
    let embed = new MessageEmbed()
    .setTitle('このBotはどういうBot?')
    .setDescription("このBotは、" + message.guild.name + "のためだけに設計されたBotです。",false)
    .addField('どういう機能があるの？',"いろいろな機能があります。一覧を見てみましょう。",false)
}
});
  client.login(guide.token);