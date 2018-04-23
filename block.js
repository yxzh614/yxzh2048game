export default {
  blocks: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
  init () {
    this.blocks = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    this.addRandomBlock()
    this.addRandomBlock()
  },
  addRandomBlock () {
    let x, y
    do {
      x = parseInt(Math.random() * 4)
      y = parseInt(Math.random() * 4)
    } while (this.blocks[x][y] !== 0)
    if (Math.random() > 0.5) {
      this.blocks[x][y] = 2
    } else {
      this.blocks[x][y] = 4
    }
  },
  getAnswer (direct, anime) {
    let animeList = []
    let ronghe
    switch (direct) {
      case 'ArrowRight': {
        for (let line = 0; line < 4; line++) {
          ronghe = false
          let result = []
          let old = [this.blocks[0][line], this.blocks[1][line], this.blocks[2][line], this.blocks[3][line]]
          for (let i = 3; i >= 0; i--) {
            if (old[i] !== 0) {
              if (ronghe) {
                result.unshift(old[i])
              } else if (old[i] === result[0]) {
                result[0] *= 2
                ronghe = true
              } else {
                result.unshift(old[i])
              }
              animeList.push({
                number: old[i],
                from: i,
                to: 4 - result.length
              })
            }
          }
          while (result.length < 4) {
            result.unshift(0)
          }
          anime(animeList)
          for (let i = 0; i < 4; i++) {
            this.blocks[i][line] = result[i]
          }
          console.log(old)
          console.log(result)
        }
      } break
      case 'ArrowLeft': {
        for (let line = 0; line < 4; line++) {
          ronghe = false
          let old = [this.blocks[3][line], this.blocks[2][line], this.blocks[1][line], this.blocks[0][line]]
          let result = []
          for (let i = 3; i >= 0; i--) {
            if (old[i] !== 0) {
              if (ronghe) {
                result.unshift(old[i])
              } else if (old[i] === result[0]) {
                result[0] *= 2
                ronghe = true
              } else {
                result.unshift(old[i])
              }
              animeList.push({
                number: old[i],
                from: i,
                to: 4 - result.length
              })
            }
          }
          while (result.length < 4) {
            result.unshift(0)
          }
          anime(animeList)
          for (let i = 0; i < 4; i++) {
            this.blocks[i][line] = result[3 - i]
          }
          console.log(old)
          console.log(result)
        }
      } break
      case 'ArrowUp': {
        for (let row = 0; row < 4; row++) {
          ronghe = false
          let old = [this.blocks[row][3], this.blocks[row][2], this.blocks[row][1], this.blocks[row][0]]
          let result = []
          for (let i = 3; i >= 0; i--) {
            if (old[i] !== 0) {
              if (ronghe) {
                result.unshift(old[i])
              } else if (old[i] === result[0]) {
                result[0] *= 2
                ronghe = true
              } else {
                result.unshift(old[i])
              }
              animeList.push({
                number: old[i],
                from: i,
                to: 4 - result.length
              })
            }
          }
          while (result.length < 4) {
            result.unshift(0)
          }
          anime(animeList)
          for (let i = 0; i < 4; i++) {
            this.blocks[row][i] = result[3 - i]
          }
          console.log(old)
          console.log(result)
        }
      } break
      case 'ArrowDown': {
        for (let row = 0; row < 4; row++) {
          ronghe = false
          let old = [this.blocks[row][0], this.blocks[row][1], this.blocks[row][2], this.blocks[row][3]]
          let result = []
          for (let i = 3; i >= 0; i--) {
            if (old[i] !== 0) {
              if (ronghe) {
                result.unshift(old[i])
              } else if (old[i] === result[0]) {
                result[0] *= 2
                ronghe = true
              } else {
                result.unshift(old[i])
              }
              animeList.push({
                number: old[i],
                from: i,
                to: 4 - result.length
              })
            }
          }
          while (result.length < 4) {
            result.unshift(0)
          }
          anime(animeList)
          for (let i = 0; i < 4; i++) {
            this.blocks[row][i] = result[i]
          }
          console.log(old)
          console.log(result)
        }
      } break
    }
      console.log(animeList)
    let willaddNewBlock = false
    animeList.forEach(element => {
      if (element.from !== element.to) {
        willaddNewBlock = true
      }
    })
    if (willaddNewBlock) {
      console.log('add random block')
      this.addRandomBlock()
    }
  },
  checkStatus () {
    status = ''
    outer:
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (this.blocks[i][j] >= 2048) {
          status = 'success'
          break outer
        } else if (this.blocks[i][j] === 0) {
          status = 'playing'
        } else {
          if ((i + 1 < 4 && this.blocks[i][j] === this.blocks[i + 1][j]) || (j + 1 < 4 && this.blocks[i][j] === this.blocks[i][j + 1])) {
            status = 'playing'
          }
        }
      }
    }
    if (status === '') {
      return 'fail'
    }
    return status
  }
}