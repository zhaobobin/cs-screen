import { Component } from "@angular/core";

@Component({
  selector: "index",
  styleUrls: ["index.component.less"],
  templateUrl: "./index.component.html",
})
export class IndexComponent {
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

  section4_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
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
    grid: {
      top: "26%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        data: ["202301", "202302", "202303"],
        axisLine: {
          show: false, //隐藏y轴
        },
        axisTick: {
          show: false,  //刻度线
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
      max: 4,
      axisLabel: {
        formatter: "{value} 亿",
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
        name: "职工",
        type: "line",
        color: "#25CA9E",
        data: [3, 2.5, 2.7],
        areaStyle: {
          color: "rgba(37, 202, 158, 0.1)",
        },
      },
      {
        name: "生育保险",
        type: "line",
        color: "#F4D80B",
        data: [0.2, 0.2, 0.4],
      },
      {
        name: "其他基本医保",
        type: "line",
        color: "#EE8139",
        data: [-0.3, -0.1, -0.1],
      },
      {
        name: "居民基本医疗保险",
        type: "line",
        color: "#32B4FD",
        data: [0, 0, 0],
      },
    ],
  };

  section5_Option = {
    title: {
      text: "",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      itemHeight: 8,
      itemWidth: 8,
      textStyle: {
        color: "#E9FFFE",
      },
    },
    grid: {
      top: "26%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["202211", "202212", "202301", "202302", "202303", "202304"],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false,  //刻度线
      },
    },
    yAxis: {
      name: "元",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 1,
      max: 5,
      axisLabel: {
        formatter: "{value} 亿",
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
        name: "职工",
        type: "bar",
        data: [3, 3.1, 3.3, 3.5,4.3, 1.4],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 1, color: 'rgba(46, 226, 178, 1)' // 0% 处的颜色
            }, {
                offset: 0, color: 'rgba(46, 226, 178, 0)' // 100% 处的颜色
            }]
          },
        }
      },
      {
        name: "居民",
        type: "bar",
        data: [0.3, 0.4, 0.2, 0.3, 0.6, 0.2],
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 1, color: 'rgba(49, 234, 242, 1)' // 0% 处的颜色
            }, {
                offset: 0, color: 'rgba(49, 234, 242, 0)' // 100% 处的颜色
            }]
          },
        }
      },
    ],
  };

  section6_Option = {
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      data: ["202211", "202212", "202301", "202302", "202303", "202304"],
      axisLine: {
        show: false, //隐藏y轴
      },
      axisTick: {
        show: false,  //刻度线
      },
    },
    yAxis: {
      name: "元",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      type: "value",
      minInterval: 400,
      max: 1600,
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
        type: 'line',
        data: [850, 900, 920, 1100, 1500, 1550],
        itemStyle: {
          color: "#25CA9E"
        }
      }
    ]
  };

  category_list1 = [
    {
      name: "参保单位",
      number: "37,830",
      icon: "../../../assets/index/cate_icon01.png"
    },
    {
      name: "社区(村委)",
      number: "378",
      icon: "../../../assets/index/cate_icon02.png"
    },
    {
      name: "托幼中小学",
      number: "293",
      icon: "../../../assets/index/cate_icon03.png"
    },
    {
      name: "大学高校",
      number: "2",
      icon: "../../../assets/index/cate_icon04.png"
    },
  ];
  category_list2 = [
    {
      name: "本地定点机构(家)",
      number: "435",
      icon: "../../../assets/index/cate_icon05.png"
    },
    {
      name: "本地定点药店(家)",
      number: "649",
      icon: "../../../assets/index/cate_icon06.png"
    },
    {
      name: "长护定点(家)",
      number: "31",
      icon: "../../../assets/index/cate_icon07.png"
    },
  ];

  ratio_data = [
    [
      { name: "参保率", value: "99.00%", icon: "../../../assets/index/ratio_icon01.png"}
    ],
    [
      { name: "职工收益率", value: "82.24%", icon: "../../../assets/index/ratio_icon02.png"},
      { name: "居民收益率", value: "45.45%", icon: "../../../assets/index/ratio_icon02.png"},
    ],
    [
      { name: "职工县城住院率", value: "82.24%", icon: "../../../assets/index/ratio_icon03.png"},
      { name: "居民县城住院率", value: "86.34%", icon: "../../../assets/index/ratio_icon03.png"},
    ],
    [
      { name: "职工住院负担率", value: "16.25%", icon: "../../../assets/index/ratio_icon04.png"},
      { name: "居民住院负担率", value: "37.68%", icon: "../../../assets/index/ratio_icon04.png"},
    ],
    [
      { name: "职工盈亏率", value: "0%", icon: "../../../assets/index/ratio_icon05.png"},
      { name: "城乡盈亏率", value: "0%", icon: "../../../assets/index/ratio_icon05.png"},
    ],
  ];

  theme_list = [
    {
      name: "参保主题",
      icon1: "../../../assets/index/theme_icon11.png",
      icon2: "../../../assets/index/theme_icon12.png",
      path: "/insured"
    },
    {
      name: "征缴主题",
      icon1: "../../../assets/index/theme_icon21.png",
      icon2: "../../../assets/index/theme_icon22.png",
      path: "/levy"
    },
    {
      name: "费用主题",
      icon1: "../../../assets/index/theme_icon11.png",
      icon2: "../../../assets/index/theme_icon12.png",
      path: "/cost"
    },
    {
      name: "风控主题",
      icon1: "../../../assets/index/theme_icon21.png",
      icon2: "../../../assets/index/theme_icon22.png",
      path: "/risk"
    },
  ];

  ngOnInit() {}
}
