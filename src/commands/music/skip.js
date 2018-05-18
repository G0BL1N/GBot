const { getGuildString } = require('../../locales.js');
const music = require('../../music.js');

module.exports = {
  variants: ['skip', 's', 'next', 'n'],
  usage: 'skip',
  async action(message, arg) {
    const l = getGuildString(message.guild);
    const queue = music.getQueue(message.guild.id);
    const voiceChannel = message.member.voiceChannel;

    music.setTextChannel(queue, message.channel);
    music.skip(queue);
  }
}
