<template>
  <div class="dashboard">
    <div class="header">
      <div class="title">Dashboard</div>
      <div class="date">23:14,Thursday,Feb 26,2018</div>
    </div>
    <div class="echartsBox">
      <div id="smoothLine"></div>
      <div id="pie"></div>
    </div>
    <div class="itemList">
      <div class="newBlog">
        <div class="num">111</div>
        <div class="title">New Blogs</div>
      </div>
      <div class="visitor">
        <div>222</div>
        <div>Day Visitor</div>
      </div>
      <div class="dashboard3"></div>
      <div class="dashboard4"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  mounted () {
    this.drawLine()
    this.drawPie()
  },
  computed: {
  },
  methods: {
    drawPie () {
      let myChart = this.$echarts.init(document.getElementById('pie'))
      myChart.setOption({
        title: {
          text: '类别比例',
          left: 30,
          top: 20,
          textStyle: {
            fontSize: 14,
            color: 'rgba(48, 52, 57)'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: '类别',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
              { value: 11, name: 'Vue' },
              { value: 2, name: 'JS' },
              { value: 331, name: 'H5' },
              { value: 11, name: 'CSS' },
              { value: 41, name: 'NODE' }
            ].sort(function (a, b) { return a.value - b.value; }),
            label: {
              show: true,
              normal: {
                formatter: "{d}% {b}",
                textStyle: {
                  color: 'rgba(64, 69, 73, 0.8)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: 'rgba(63, 67, 22, 0.5)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(94, 119, 255, 0.5)',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
              return Math.random() * 200;
            }
          }
        ]
      })
    },
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('smoothLine'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Blog Nums',
          left: 30,
          top: 20,
          textStyle: {
            fontSize: 14,
            color: 'rgba(48, 52, 57)'
          }
        },
        grid: {
          left: '50px',
          right: '50px'
        },
        xAxis: {
          boundaryGap: false,
          axisLabel: {
            color: 'rgba(200, 200, 200)'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          data: ["1", "2", "3", "4", "5", "6"]
        },
        yAxis: {
          min: 'dataMin',
          axisLabel: {
            color: 'rgba(200, 200, 200)'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        series: [{
          smooth: true,
          showSymbol: false,
          areaStyle: {
            // color: 'rgba(94,119,255)'
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(200,135,235)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(228,175,242)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          lineStyle: {
            width: 0
          },
          name: '博客数量',
          type: 'line',
          data: [3, 2, 5, 7, 1, 2]
        }]
      });
    }
  }
}
</script>

<style scoped>
.dashboard {
  background: rgba(245, 245, 245);
  height: 100%;
  padding-bottom: 20px;
}
.header {
  padding: 30px 40px 15px;
  height: 20px;
}
.title {
  float: left;
  color: rgba(40, 45, 50);
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
}
.date {
  color: rgba(111, 114, 117);
  font-size: 14px;
  float: right;
  line-height: 20px;
}
.echartsBox {
  overflow: hidden;
  margin: 10px 40px 25px;
  height: 400px;
}
#smoothLine {
  background: #fff;
  float: left;
  width: calc(100% - 425px);
  height: 400px;
}
#pie {
  width: 400px;
  float: right;
  background: #fff;
  height: 400px;
}
.itemList {
  height: 100px;
  margin: 0 40px;
}
.itemList > div {
  float: left;
  width: calc((100% - 75px) / 4);
  height: 100px;
  box-sizing: border-box;
  padding: 25px 40px;
  margin-right: 25px;
  background-color: #fff;
}
.itemList > div:last-child {
  margin-right: 0;
}
.itemList .num {
  font-size: 20px;
  line-height: 25px;
  color: rgba(64, 69, 73);
}
.itemList .title {
  font-size: 12px;
  line-height: 25px;
  color: rgba(64, 69, 73);
}
.newBlog {
  background: url("../../../assets/img/dashboard1.png") no-repeat right 30px
    center;
}
.visitor {
  background: url("../../../assets/img/dashboard2.png") no-repeat right 30px
    center;
}
.dashboard3 {
  background: url("../../../assets/img/dashboard3.png") no-repeat right 30px
    center;
}
.dashboard4 {
  background: url("../../../assets/img/dashboard3.png") no-repeat right 30px
    center;
}
</style>
