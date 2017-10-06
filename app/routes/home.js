const welcome = require('../templates/welcome');
const upload = require('../templates/upload');

module.exports = function(state, emit) {
  if (state.transfer && state.transfer.iv) {
    //TODO
    return upload(state, emit);
  }
  return welcome(state, emit);
};
