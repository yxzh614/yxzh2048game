import blocks from './block.js'
export default {
  colorList: {
    0: 'gray',
    2: '#ede7f6',
    4: '#d1c4e9',
    8: '#b39ddb',
    16: '#9575cd',
    32: '#7e57c2',
    64: '#673ab7',
    128: '#5e35b1',
    256: '#512da8',
    512: '#4527a0',
    1024: '#311b92',
    2048: '#ffff00'
  },
  fontList: {
    0: {font: '', offset: 2},
    2: '#ede7f6',
    4: '#d1c4e9',
    8: '#b39ddb',
    16: '#9575cd',
    32: '#7e57c2',
    64: '#673ab7',
    128: '#5e35b1',
    256: '#512da8',
    512: '#4527a0',
    1024: '#311b92',
    2048: '#ffff00'
  },
  ctx: null,
  blocks: [],
  get width () {
    return this.ctx.canvas.width
  },
  get blockLength () {
    return this.ctx.canvas.width / 5
  },
  get spaceWidth () {
    return this.ctx.canvas.width / 25
  },
  init (id) {
    let canvas = document.getElementById(id)
    this.ctx = canvas.getContext('2d')
    console.log(`create canvas: ${this.width} * ${this.width}`)
  },
  drawBlock (X, Y) {
    let x = this.spaceWidth + (X) * (this.blockLength + this.spaceWidth)
    let y = this.spaceWidth + (Y) * (this.blockLength + this.spaceWidth)
    this.ctx.fillStyle = this.colorList[blocks.blocks[X][Y]]
    this.ctx.fillRect(x, y, this.blockLength, this.blockLength)
    this.ctx.fillStyle = 'black'
    this.ctx.font = '48px fantasy'
    this.ctx.fillText(blocks.blocks[X][Y], x, y + this.blockLength - 30)
  },
  drawBlocks () {
    console.log('drawing')
    blocks.blocks.forEach((line, X) => {
      line.forEach((block, Y) => {
        this.drawBlock(X, Y)
      })
    })
  },
  anime (arr) {
    // arr.forEach(_ => {
    //   console.log(`move block: ${_.block} to ${_.target}`)
    // })
  },
  move (direct ,callBack) {
    blocks.getAnswer(direct, this.anime)
    this.drawBlocks()
    callBack(blocks.checkStatus())
  },
  newGame () {
    blocks.init()
    console.log(this)
    this.drawBlocks()
  }
}
blocks.init()
function createBlock () {
  let b = {}
}