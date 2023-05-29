import { Component } from "@angular/core";

@Component({
  selector: "cost",
  styleUrls: ["cost.component.less"],
  templateUrl: "./cost.component.html",
})
export class CostComponent {
  section1_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 5,
      max: 15,
      axisLabel: {
        formatter: "{value}亿元",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: ["二乙", "离休", "企业生育", "长期护理", "居民医保", "基本医疗"],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    series: [
      {
        name: "缴费类型分布",
        type: "bar",
        data: [0.5, 2.5, 3, 3, 4, 13],
        barWidth: 16,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: "rgba(46, 226, 178, 1)" // 0% 处的颜色
            }, {
                offset: 1, color: "rgba(46, 226, 178, 0)" // 100% 处的颜色
            }]
          },
        },
      },
    ],
  };

  section2_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 10,
      max: 30,
      axisLabel: {
        formatter: "{value}亿元",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "建国前老工人",
        "二乙",
        "离休",
        "少儿学生",
        "居民",
        "在职",
        "退休",
      ],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    series: [
      {
        name: "缴费类型分布",
        type: "bar",
        data: [2, 3, 3, 4, 6, 9, 28],
        barWidth: 16,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: "rgba(46, 226, 178, 1)" // 0% 处的颜色
            }, {
                offset: 1, color: "rgba(46, 226, 178, 0)" // 100% 处的颜色
            }]
          },
        },
      },
    ],
  };

  section3_Option = {
    series: [
      {
        type: "treemap",
        itemStyle: {
          borderColor: '#fff'
        },
        data: [
          {
            name: "统筹",
            value: 93360.19,
            itemStyle: {
              color: '#14B3A9',
            }
          },
          {
            name: "个账",
            value: 46346.33,
            itemStyle: {
              color: '#32B4FD'
            }
          },
          {
            name: "大病",
            value: 2000,
            itemStyle: {
              color: '#F4D80B'
            }
          },
          {
            name: "公补",
            value: 1000,
            itemStyle: {
              color: '#2EE2B2'
            }
          },
          {
            name: "救助",
            value: 600,
            itemStyle: {
              color: '#EE8139'
            }
          },
          {
            name: "大额",
            value: 300,
            itemStyle: {
              color: '#276AF2'
            }
          },
        ],
      },
    ],
  };

  cate_list1 = [
    {
      name: "本地定点机构(家)",
      value: "435",
      icon: "../../../assets/index/cate_icon01.png",
    },
    {
      name: "本地定点药店(家)",
      value: "649",
      icon: "../../../assets/index/cate_icon06.png",
    },
  ];

  cate_list2 = [
    { name: "总支出(增长率)", value: "435" },
    { name: "职工支出(增长率)", value: "435" },
    { name: "居民支出(增长率)", value: "435" },
    { name: "门诊次均(增长率)", value: "435" },
    { name: "住院次均(增长率)", value: "435" },
  ];

  section4_Option = {
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
      right: 16,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "202204",
          "202205",
          "202206",
          "202207",
          "202208",
          "202209",
          "202210",
          "202211",
          "202212",
          "202301",
          "202302",
          "202303",
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
      name: "元",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 1,
      max: 6,
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
        name: "总费用",
        type: "line",
        color: "#276AF2",
        data: [1, 2, 2, 3, 3, 4, 4, 5, 5.5, 6, 5, 3],
      },
      {
        name: "报销额",
        type: "line",
        color: "#25CA9E",
        data: [0.5, 1, 1.5, 2, 2, 3, 3, 4, 4.5, 5, 4, 2],
      },
      {
        name: "现金",
        type: "line",
        color: "#F4D80B",
        data: [0.3, 0.8, 1, 1.5, 2, 2, 3, 3.5, 4, 4.5, 3.5, 1.5],
      },
    ],
  };

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
    legend: {
      itemHeight: 0,
      itemWidth: 16,
      right: 16,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "202204",
          "202205",
          "202206",
          "202207",
          "202208",
          "202209",
          "202210",
          "202211",
          "202212",
          "202301",
          "202302",
          "202303",
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
      name: "次",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 50,
      max: 250,
      axisLabel: {
        formatter: "{value}",
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
        name: "基本医疗",
        type: "line",
        color: "#2EE2B2",
        data: [200, 205, 210, 216, 219, 225, 236, 240, 245, 238, 220, 210],
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: "rgba(46, 226, 178, 0.1)",
        },
      },
      {
        name: "居民医保",
        type: "line",
        color: "#F4D80B",
        data: [60, 62, 63, 64, 65, 66, 64, 63, 65, 67, 69, 70],
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: "rgba(244, 216, 11, 0.1)",
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
      right: 16,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: [
          "202204",
          "202205",
          "202206",
          "202207",
          "202208",
          "202209",
          "202210",
          "202211",
          "202212",
          "202301",
          "202302",
          "202303",
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
      name: "次",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 1,
      max: 3,
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
        name: "基本医疗",
        type: "line",
        color: "#2EE2B2",
        data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: "rgba(46, 226, 178, 0.1)",
        },
      },
      {
        name: "居民医保",
        type: "line",
        color: "#F4D80B",
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        smooth: true,
        showSymbol: false,
        areaStyle: {
          color: "rgba(244, 216, 11, 0.1)",
        },
      },
    ],
  };

  section7_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 10,
      max: 30,
      axisLabel: {
        formatter: "{value}亿元",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "厂矿卫生所",
        "门诊部诊所",
        "社区服务站",
        "护理院",
        "乡镇卫生院",
        "零售药店",
        "城区医院",
      ],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    series: [
      {
        name: "缴费累计",
        type: "bar",
        data: [2, 3, 3, 4, 6, 9, 28],
        barWidth: 16,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: "rgba(46, 226, 178, 1)" // 0% 处的颜色
            }, {
                offset: 1, color: "rgba(46, 226, 178, 0)" // 100% 处的颜色
            }]
          },
        },
      },
    ],
  };

  section8_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 1,
      max: 4,
      axisLabel: {
        formatter: "{value}亿人",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "常州市市本级",
        "南通市市本级",
        "苏州市吴江区",
        "苏州市太仓市",
        "无锡市市本级",
        "苏州市昆山市",
        "苏州市张家港市",
        "南京市市本级",
        "苏州市姑苏区",
        "苏州市市本级",
      ],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    series: [
      {
        name: "缴费人数",
        type: "bar",
        data: [1, 1, 1, 1.2, 1.5, 2, 3, 3.7, 3.8, 3.9],
        barWidth: 16,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: "rgba(46, 226, 178, 1)" // 0% 处的颜色
            }, {
                offset: 1, color: "rgba(46, 226, 178, 0)" // 100% 处的颜色
            }]
          },
        },
      },
    ],
  };

  section9_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      minInterval: 1,
      max: 4,
      axisLabel: {
        formatter: "{value}亿人",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    yAxis: {
      type: "category",
      data: [
        "河南省省本级",
        "山东省淮坊市",
        "四川省省本级",
        "湖北省省本级",
        "广东省广州市",
        "浙江省省本级",
        "安徽省省本级",
        "北京市",
        "江西省萍乡市市本级",
        "上海市",
      ],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    series: [
      {
        name: "缴费人数",
        type: "bar",
        data: [1, 1, 1, 1.2, 1.5, 2, 3, 3.7, 3.8, 3.9],
        barWidth: 16,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 0, color: "rgba(46, 226, 178, 1)" // 0% 处的颜色
            }, {
                offset: 1, color: "rgba(46, 226, 178, 0)" // 100% 处的颜色
            }]
          },
        },
      },
    ],
  };

  ngOnInit() {}
}
