import { Component } from "@angular/core";

@Component({
  selector: "levy",
  styleUrls: ["levy.component.less"],
  templateUrl: "./levy.component.html",
})
export class LevyComponent {

  top_left_data = [
    { name: "职工人均缴费基数", value: "5376.53" },
    { name: "其中生育人均缴费基数", value: "5695.9" },
  ];

  top_center_data = [
    { name: "职工征收总额", value: "8.45亿" },
    { name: "职工征收率", value: "99.40%" },
    { name: "生育征收率", value: "99.28%" },
    { name: "生育征收总额", value: "0.23亿" },
    { name: "居民征缴额", value: "4.40亿" },
  ];

  top_right_data = [
    { name: "居民人均筹资", value: "1352.22" },
    { name: "居民其中个人缴费", value: "1082.6" },
  ];

  section1_Option = {
    title: {
      text: "",
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
      formatter(params) {
        let relVal = params[0].name;
        for (let i = 0, l = params.length; i < l; i++) {
          relVal += `<br/>${params[i].marker}${params[i].seriesName} : ${params[
            i
          ].value.toLocaleString()}`;
        }
        return relVal;
      },
    },
    legend: {
      itemHeight: 4,
      itemWidth: 20,
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
        data: [
          "补充医疗",
          "大额共济",
          "二乙基金",
          "公务员补助",
          "基本医疗",
          "离休基金",
          "企业生育",
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
      max: 8,
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
        name: "单位缴费",
        type: "line",
        color: "#01E7D9",
        data: [0.49, 0.5, 0.24, 0.64, 7.39, 0.63, 1.9],
        label: {
          show: true,
          position: [0, -15],
          formatter(a) {
            return a.value.toLocaleString() + "万";
          },
          textStyle: {
            color: "#01E7D9",
            fontSize: 12,
          },
        },
      },
      {
        name: "个人缴费",
        type: "line",
        color: "#F4D80B",
        data: [0.61, 0.69, 0.4, 0.89, 2.0, 0.5, 0],
        label: {
          show: true,
          position: [0, -30],
          formatter(a) {
            return a.value.toLocaleString() + "万";
          },
          textStyle: {
            color: "#F4D80B",
            fontSize: 12,
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
      confine: true,
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
      minInterval: 30,
      max: 120,
      axisLabel: {
        formatter: "{value}万人",
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
        "居民结算",
        "个体结算",
        "调整",
        "个体补缴",
        "离休二乙人员结算",
        "合同期补缴",
        "失业基金缴费",
        "补缴医疗工龄",
        "正常月结",
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
        data: [2, 3, 3, 4, 4, 5, 6, 10, 100],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
              {
                // 四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐
                // 变。offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。
                offset: 0,
                color: "rgba(46, 226, 178, 1)",
              },
              {
                offset: 1,
                color: "rgba(46, 226, 178, 0)",
              },
            ]),
          },
        },
      },
    ],
  };

  section3_Option = {
    title: {
      text: "",
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
      formatter(params) {
        let relVal = params[0].name;
        for (let i = 0, l = params.length; i < l; i++) {
          relVal += `<br/>${params[i].marker}${params[i].seriesName} : ${params[
            i
          ].value.toLocaleString()}`;
        }
        return relVal;
      },
    },
    legend: {
      itemHeight: 4,
      itemWidth: 20,
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
        data: [
          "补充医疗",
          "大额共济",
          "二乙基金",
          "公务员补助",
          "基本医疗",
          "离休基金",
          "企业生育",
        ],
        axisLine: {
          show: false,
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
      max: 8,
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
        name: "统筹",
        type: "line",
        color: "#01E7D9",
        data: [0.49, 0.5, 0.24, 0.64, 1.39, 0.63, 1.9],
        label: {
          show: true,
          position: [0, -15],
          formatter(a) {
            return a.value.toLocaleString() + "万";
          },
          textStyle: {
            color: "#01E7D9",
            fontSize: 12,
          },
        },
      },
      {
        name: "个账",
        type: "line",
        color: "#F4D80B",
        data: [0.61, 0.69, 0.4, 0.89, 2.0, 0.5, 0.6],
        label: {
          show: true,
          position: [0, -30],
          formatter(a) {
            return a.value.toLocaleString() + "万";
          },
          textStyle: {
            color: "#F4D80B",
            fontSize: 12,
          },
        },
      },
    ],
  };

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
    title: null,
    tooltip: false,
    legend: false,
    graphic: [
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
      { //环形图中间添加文字
        type: 'text', //通过不同top值可以设置上下显示
        left: "center",
        top: '35%',
        style: {
            text: '4.4亿',
            textAlign: 'center',
            fill: '#fff', //文字的颜色
            fontSize: 24,
            lineHeight: 36,
        }
      },
      {
        type: 'text',
        left: "center",
        top: '52%',
        style: {
            text: '居保总收入',
            textAlign: 'center',
            fill: '#C3FFEF', //文字的颜色
            fontSize: 16,
            lineHeight: 20,
        }
      }
    ],
    color: ['#32B4FD', '#2EE2B2', '#2EE2B2', '#32B4FD', '#EE8139', '#516BBF', '#D3E4FF', '#DD78C4', '#E7C629', '#14B3A9'],
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['55%', '80%'],
        itemStyle: {
          borderColor: '#000',
          borderWidth: 4
        },
        data: [
          { value: 1.17, name: '个人', label: {color: '#32B4FD' } },
          { value: 3.23, name: '财政', label: {color: '#2EE2B2' } },
        ],
        label: {
          color: '#fff',
          lineHeight: 24,
          formatter: '{b} \n {c}亿({d}%)',
          // rich: {
          //   a: {
          //     color: '#32B4FD'
          //   },
          //   b: {
          //     color: '#2EE2B2'
          //   },
          // }
        },
      }
    ]
  };

  section6_Data = [
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

  ngOnInit() {}
}
