const View = require ('./ttt-view'); // require appropriate file
const Game = require ('./game');// require appropriate file

$( () => {
  let rootEl = $('.ttt');
  const game = new Game ();
  new View (game, rootEl);
});
