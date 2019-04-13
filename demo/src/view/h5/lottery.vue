<template>
  <article class="lottery h5">
    <section>
      <div class="lotteryBox">
        <div class="box1" :class="{active:curIndex===0}">1</div>
        <div class="box2" :class="{active:curIndex===1}">2</div>
        <div class="box3" :class="{active:curIndex===2}">3</div>
        <div class="box8" :class="{active:curIndex===7}">8</div>
        <div class="box" @click="start">点击抽奖</div>
        <div class="box4" :class="{active:curIndex===3}">4</div>
        <div class="box7" :class="{active:curIndex===6}">7</div>
        <div class="box6" :class="{active:curIndex===5}">6</div>
        <div class="box5" :class="{active:curIndex===4}">5</div>
      </div>
    </section>
  </article>
</template>

<script>

export default {
  name: 'lottery',
  data: () => {
    return {
      curIndex: 1,
      prize: 8,
      rollStatus: false,
      lottery: {
        count: 8,
        timer: null,
        speed: 100,
        times: 0,
        cycle: 50,
        prize: -1
      }
    }
  },
  methods: {
    start () {
      this.rollStatus === false && this.roll()
    },
    roll () {
      let cycle = this.lottery.cycle
      let count = this.lottery.count
      let prize = this.lottery.prize
      this.rollStatus = true
      this.lottery.times++
      ++this.curIndex > count - 1 && (this.curIndex = 0)
      if (this.lottery.times > cycle + 10 && prize == this.curIndex) {
        clearTimeout(this.lottery.timer)
        this.rollStatus = false
        this.lottery.prize = -1
        this.lottery.times = 0
        this.lottery.speed = 100
      } else {
        if (this.lottery.times < cycle) {
          this.lottery.speed -= 10
        } else if (this.lottery.times == cycle) {
          this.lottery.prize = this.prize > count - 1 ? (Math.random() * count | 0) : this.prize
        } else {
          if (this.lottery.times > cycle + 10 && ((prize === 0 && this.curIndex === 7) || prize === this.curIndex + 1)) {
            this.lottery.speed += 110
          } else {
            this.lottery.speed += 20
          }
        }
        if (this.lottery.speed < 40) {
          this.lottery.speed = 40
        }
        this.lottery.timer = setTimeout(this.roll, this.lottery.speed)
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@@/mixin.less";
.lottery {
  .wh(100%, 100%);
  background: #eee;
  section {
    width: 80%;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
    .lotteryBox {
      position: absolute;
      .wh(100%, 100%);
      div {
        float: left;
        text-align: center;
        vertical-align: middle;
        .wh(33.3%, 33.3%);
        box-sizing: border-box;
      }
      .box1 {
        background: #beedc7;
      }
      .box2 {
        background: #f4606c;
      }
      .box3 {
        background: #8cc7b5;
      }
      .box4 {
        background: #ecad9e;
      }
      .box5 {
        background: #a0eee1;
      }
      .box6 {
        background: #19caad;
      }
      .box7 {
        background: #bee7e9;
      }
      .box8 {
        background: #d6d5b7;
      }
      .box {
        cursor: pointer;
      }
      .active {
        position: relative;
        overflow: hidden;
        &:after {
          .wh(100%, 100%);
          box-sizing: border-box;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          border: 0.3rem solid rgba(255, 255, 255, 0.3);
          border-radius: 0.3rem;
          display: block;
        }
      }
    }
    &:after {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
}
</style>
