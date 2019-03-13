Component({
// 目前组件，只接受时间戳，其他的没有做
// 现在的时间，和结束时间，都必须从后台获取，因为客户端时间不一致
  properties: {
    nowTime: {
      type: Number
    },
    overTime: {
      type: Number
    }
  },
  data: {
    time: null,
    timer: null,
    content: '',
    flag: true,
    text: ['时', '分', '秒']
  },
  ready() {
    this.time()
  },
  detached() {
  // 页面被被销毁的时候，清除定时器
    clearInterval(this.data.timer)
  },
  methods: {
    time() {
      this.setData({
        timer: setInterval(() => {
          this.countDown()
          let time = this.data.time
          time = time - 1
          this.setData({
            time: time
          })
        }, 1000)
      })
    },
    countDown() {
    // 解构赋值
      let {
        overTime,
        nowTime,
        timer
      } = this.data
      let time
      if (overTime < nowTime) {
        clearInterval(timer)
        this.setData({
          flag: false
        })
        return true
      } else {
      // 只有在第一次赋值
        if (!this.data.time) {
          let temporary = overTime - nowTime
          this.setData({
            time: temporary
          })
        }
        time = this.data.time
        if (time === 0) {
          clearInterval(timer)
          this.setData({
            flag: false
          })
          return true
        }
        let day, hour, minute, second, content = '';
        // 计算、天、时、分、秒
        // day = Math.floor(time / (60 * 60 * 24))
        hour = Math.floor((time % (60 * 60 * 24)) / (60 * 60))
        minute = Math.floor(((time % (60 * 60 * 24)) % (60 * 60)) / 60)
        second = Math.floor(((time % (60 * 60 * 24)) % (60 * 60)) % 60)
        let array = [ hour, minute, second]
        // 处理数据，如果、天、时、分、秒小于10，则拼接成09这种形式
        let timeList = array.map((item, index) => item < 10 ? `0${item}` : item)
        // 输出，进行字符拼接
        timeList.forEach((item, index) => {
          content += `${item}${this.data.text[index]}`
        })
        this.setData({
          content: content
        })
      }
    }
  }
})
