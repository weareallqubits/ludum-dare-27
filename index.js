var ticker = require('ticker')
var game = require('./game-instance')

require('raf')().on('data', function() {
  game.tick()
  game.draw()
})

function loop() {
  // ticker(null, 60, 2)
  //   .on('tick', function() { game.tick() })
  //   .on('draw', function() { game.draw() })
}

game.start()
loop()
