;import draw from './draw.js'
window.onload = () => {
  draw.init('screen')
  draw.drawBlocks()
  document.getElementById('new-game').onclick = function () {
    draw.newGame()
  }
}
document.onkeydown = function (e) {
  console.log(`press key: ${e.key}`)
  draw.move(e.key, showStatus)
}

function showStatus (e) {
  if (e === 'fail') {
    document.getElementById('status').innerHTML = '胜败乃兵家常事，大侠请重新来过'
  } else if (e === 'success') {
    document.getElementById('status').innerHTML = '大侠真乃绝世高人，继续游戏可更上一层楼'
  }
}