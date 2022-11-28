const { CommandType } = require('wokcommands');

module.exports = {
  type: CommandType.LEGACY,
  reply: true,
  
  callback: () => {
    return 'Pong!'
  },
};
