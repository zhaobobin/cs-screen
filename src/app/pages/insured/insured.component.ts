import { Component } from "@angular/core";

@Component({
  selector: "insured",
  styleUrls: ["insured.component.less"],
  templateUrl: "./insured.component.html",
})
export class InsuredComponent {
  section2_Option = {
    tooltip: {
      trigger: "item",
    },
    legend: false,
    graphic: {
      elements: [
        {
          type: "image",
          style: {
            //图片的大小和地址
            image: "../../../assets/index/index_section2_icon.png",
            width: 40,
            height: 40,
          },
          left: "center",
          top: "middle",
        },
      ],
    },
    color: ["#58b2f7", "#6cdeb5"],
    series: [
      {
        name: "参保险种分布",
        type: "pie",
        radius: ["65%", "88%"],
        avoidLabelOverlap: false,
        tooltip: {
          position: ["90%", "80%"],
        },
        itemStyle: {
          borderColor: "#142428",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 25.63, name: "居民" },
          { value: 74.37, name: "职工" },
        ],
      },
      {
        name: "外边框",
        type: "pie",
        radius: ["99%", "100%"],
        avoidLabelOverlap: false,
        emptyCircleStyle: {
          color: "#14B3A9",
          opacity: 0.3,
        },
      },
      {
        name: "内边框",
        type: "pie",
        radius: ["44%", "45%"],
        avoidLabelOverlap: false,
        emptyCircleStyle: {
          color: "#14B3A9",
          opacity: 0.3,
        },
      },
    ],
  };

  section3_Data = [
    { name: "在职", value: "60.34" },
    { name: "退休", value: "30.09" },
    { name: "学生少儿", value: "18.33" },
    { name: "老年居民", value: "10.43" },
    { name: "失业人员", value: "2.16" },
    { name: "大学生", value: "1.62" },
  ];

  section4_Data = [
    { name: "零售业", number: "5963" },
    { name: "批发业", number: "5039" },
    { name: "其他服务业", number: "3874" },
    { name: "纺织业", number: "2562" },
    { name: "金属制品业", number: "2457" },
    { name: "纺织服装、鞋、帽制造业", number: "1857" },
    { name: "商务服务业", number: "1717" },
    { name: "通用设备制造业", number: "857" },
    { name: "餐饮业", number: "833" },
    { name: "国家机构", number: "761" },
  ];

  section5_Option = {
    grid: {
      top: "25%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisLine: {
          show: false, //隐藏y轴
        },
        axisTick: {
          show: false, //刻度线
          alignWithLabel: true,
        },
      },
    ],
    yAxis: {
      name: "家",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 1,
      max: 4,
      axisLabel: {
        formatter: "{value} 万",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, 0.2)",
        },
      },
    },
    series: [
      {
        name: "",
        type: "line",
        color: "#25CA9E",
        data: [3.5, 3.5, 3.6, 3.6, 3.7, 3.7, 3.8, 3.8, 3.9, 3.9, 4, 4],
        areaStyle: {
          color: "rgba(37, 202, 158, .1)",
        },
      },
    ],
  };

  section6_Option = {
    grid: {
      top: "25%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      itemHeight: 0,
      itemWidth: 16,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisLine: {
          show: false, //隐藏y轴
        },
        axisTick: {
          show: false, //刻度线
          alignWithLabel: true,
        },
      },
    ],
    yAxis: {
      name: "人",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      splitNumber: 4,
      max: 100,
      axisLabel: {
        formatter: "{value} 万",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, 0.2)",
        },
      },
    },
    series: [
      {
        name: "总数",
        type: "line",
        color: "#276AF2",
        data: [80, 80, 82, 82, 83, 84, 84, 85, 86, 87, 88, 89],
        areaStyle: {
          color: "rgba(31, 57, 112, .7)",
        },
      },
      {
        name: "学生少儿",
        type: "line",
        color: "#2EE2B2",
        data: [60, 62, 63, 64, 65, 66, 64, 63, 65, 67, 69, 70],
        areaStyle: {
          color: "rgba(46, 226, 178, .7)",
        },
      },
      {
        name: "大学生",
        type: "line",
        color: "#F4D80B",
        data: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
        areaStyle: {
          color: "rgba(244, 216, 11, .7)",
        },
      },
    ],
  };

  data1 = [
    520, 1000, 2000, 2300, 2400, 2500, 2600, 2700, 5100, 5200, 5300, 7000, 8000,
    8200, 9000, 9500,
  ];
  data2 = [
    520, 1000, 2000, 2300, 2400, 2500, 2600, 2700, 5100, 5200, 5300, 7000, 8000,
    8200, 9000, 9500,
  ];
  // 設置柱狀圖3D效果的option
  getEcharts3DBar = (data1: number[], data2: number[]) => {
    const endData = data1.map((item, index) => item + data2[index]);
    const barWidth = 20;
    var colorArr = ["#11D19E", "#14B3A9", "#16F1B7"];
    const color = {
      type: "linear",
      x: 0,
      x2: 0,
      y: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: colorArr[0],
        },
        {
          offset: 0.5,
          color: colorArr[0],
        },
        {
          offset: 0.5,
          color: colorArr[1],
        },
        {
          offset: 1,
          color: colorArr[1],
        },
      ],
    };
    const colorArr2 = ["#57B1F4", "#1493DA", "#32B4FD"];
    const color2 = {
      type: "linear",
      x: 0,
      x2: 0,
      y: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: colorArr2[0],
        },
        {
          offset: 0.5,
          color: colorArr2[0],
        },
        {
          offset: 0.5,
          color: colorArr2[1],
        },
        {
          offset: 1,
          color: colorArr2[1],
        },
      ],
    };
    const option = {
      tooltip: {
        trigger: "axis",
        confine: true,
        axisPointer: {
          type: "shadow",
        },
      },
      legend: [
        {
          data: ["男"],
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: "#E9FFFE",
          },
          itemStyle: {
            color: '#2EE2B2'
          },
          selectedMode: false,
          right: "15%",
        },
        {
          data: ["女"],
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            color: "#E9FFFE",
          },
          itemStyle: {
            color: '#32B4FD'
          },
          selectedMode: false,
          right: "5%",
        },
      ],
      grid: {
        top: "6%",
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        splitNumber: 5,
        max: 20000,
        axisLabel: {
          formatter: "{value} 人",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "rgba(8, 124, 125, 0.2)",
          },
        },
      },
      yAxis: {
        type: "category",
        data: [
          "常熟市本级",
          "东南街道办事处",
          "碧溪镇碧溪管理区",
          "虞山街道",
          "莫城街道",
          "沙家浜镇",
          "琴川街道",
          "古里镇",
          "常福街道",
          "董浜镇",
          "碧溪镇",
          "海虞镇",
          "尚湖镇",
          "梅李镇",
          "支塘镇",
          "辛庄镇",
        ],
        axisTick: {
          show: false, //刻度线
          alignWithLabel: true,
        },
      },
      series: [
        {
          z: 1,
          name: '男',
          type: 'bar',
          stack: 'total',
          data: data1,
          itemStyle: {
            normal: {
              color: color,
            }
          }
        },
        {
          z: 2,
          name: '女',
          type: 'bar',
          stack: 'total',
          barGap: '5%',
          data: data2,
          itemStyle: {
            normal: {
              color: color2,
            }
          }
        },
        {
          z: 3,
          name: "男",
          type: "pictorialBar",
          symbolPosition: "end",
          data: data1,
          symbol: "diamond",
          symbolOffset: ["60%", "0"],
          symbolSize: [10, barWidth],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: colorArr[2],
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          z: 4,
          name: "女",
          type: "pictorialBar",
          symbolPosition: "end",
          data: endData,
          symbol: "diamond",
          symbolOffset: ["60%", "0"],
          symbolSize: [10, barWidth],
          itemStyle: {
            normal: {
              borderWidth: 2,
              color: colorArr2[2],
            },
          },
          tooltip: {
            show: false,
          },
        },
      ],
    };
    return option;
  };

  section8_Option = {
    grid: {
      top: "15%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      confine: true,
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      itemHeight: 0,
      itemWidth: 16,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisLine: {
          show: false, //隐藏y轴
        },
        axisTick: {
          show: false, //刻度线
          alignWithLabel: true,
        },
      },
    ],
    yAxis: {
      name: "家",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      splitNumber: 8,
      max: 35,
      axisLabel: {
        formatter: "{value} 万",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, 0.2)",
        },
      },
    },
    series: [
      {
        name: "总数",
        type: "line",
        color: "#276AF2",
        data: [33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33],
        areaStyle: {
          color: "rgba(31, 57, 112, .7)",
        },
      },
      {
        name: "学生少儿",
        type: "line",
        color: "#2EE2B2",
        data: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
        areaStyle: {
          color: "rgba(46, 226, 178, .7)",
        },
      },
      {
        name: "大学生",
        type: "line",
        color: "#F4D80B",
        data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        areaStyle: {
          color: "rgba(244, 216, 11, .7)",
        },
      },
      {
        name: "老年居民",
        type: "line",
        color: "#EE8139",
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
        areaStyle: {
          color: "rgba(238, 129, 57, .7)",
        },
      },
      {
        name: "失业人员",
        type: "line",
        color: "#32B4FD",
        data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        areaStyle: {
          color: "rgba(50, 180, 253, .7)",
        },
      },
    ],
  };

  category_list = [
    {
      name: "参保单位",
      number: "37,830",
      icon: "../../../assets/index/cate_icon01.png",
    },
    {
      name: "社区(村委)",
      number: "378",
      icon: "../../../assets/index/cate_icon02.png",
    },
    {
      name: "托幼中小学",
      number: "293",
      icon: "../../../assets/index/cate_icon03.png",
    },
    {
      name: "大学高校",
      number: "2",
      icon: "../../../assets/index/cate_icon04.png",
    },
  ];

  theme_list = [
    {
      name: "参保主题",
      icon1: "../../../assets/index/theme_icon11.png",
      icon2: "../../../assets/index/theme_icon12.png",
      path: "/insured",
    },
    {
      name: "征缴主题",
      icon1: "../../../assets/index/theme_icon21.png",
      icon2: "../../../assets/index/theme_icon22.png",
      path: "/levy",
    },
    {
      name: "费用主题",
      icon1: "../../../assets/index/theme_icon11.png",
      icon2: "../../../assets/index/theme_icon12.png",
      path: "/cost",
    },
    {
      name: "风控主题",
      icon1: "../../../assets/index/theme_icon21.png",
      icon2: "../../../assets/index/theme_icon22.png",
      path: "/risk",
    },
  ];

  ngOnInit() {}
}
