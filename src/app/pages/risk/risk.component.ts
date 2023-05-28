import { Component } from '@angular/core';

@Component({
  selector: 'risk',
  styleUrls: ['risk.component.less'],
  templateUrl: './risk.component.html',
})
export class RiskComponent {

  data_list1 = [
    { name: "人员参保险种不齐", value: "8" },
    { name: "长护大病个账划转缴费重复", value: "8" },
    { name: "人均缴费基数最低的1000家名单", value: "4000" },
    { name: "单位险种到账未齐数-按险种查未到账", value: "8" },
    { name: "退休人员未达到医保年限监测（女20女20女20女）", value: "8" },
    { name: "居民已参保免缴人员名单-救助人员救助人员救助", value: "1275" },
    { name: "身份证错误数-月校验身份证证件不一致", value: "24" },
    { name: "未终止死亡人员人数监测-医保未终医保未终", value: "19133" },
    { name: "异常退费监测名单-不符合当月重复符合当月重复", value: "95" },
    { name: "身份证与人社姓名不一致-同人社身同人社身", value: "9325" },
    { name: "清算账户支付个人监测-清算转移未清算转移未清算", value: "632" },
    { name: "个账账户划转重复", value: "18" },
    { name: "未到账单位清单-上月正常到账本月异常", value: "11756" },
    { name: "死亡后刷卡就医人数-死亡终止后直死亡终止后直", value: "286" },
  ];

  cate_list1 = [
    { name: "规则启用量", value: "71", icon: "../../../assets/risk/cate_icon01.png" },
    { name: "命中规则量", value: "47", icon: "../../../assets/risk/cate_icon02.png" },
  ];

  cate_list2 = [
    { name: "内控规则量", value: "4798.69" },
    { name: "规则处理完成量", value: "4522.69" },
    { name: "规则处理量", value: "4522.69" },
    { name: "违规总额(元)", value: "4798.69" },
    { name: "已追回违规费用(元)", value: "276" },
    { name: "未追回违规费用(元)", value: "4522.69" },
  ];

  section2_Option = [
    { name: "处理完成", value: 6 },
    { name: "处理中", value: 8 },
    { name: "未处理", value: 5 },
    { name: "无需处理", value: 1 },
  ];

  section3_Option = {
    title: null,
    tooltip: false,
    legend: false,
    color: ['#276AF2', '#8BC472', '#2EE2B2', '#32B4FD', '#EE8139', '#516BBF', '#D3E4FF', '#DD78C4', '#E7C629', '#14B3A9'],
    series: [
      {
        name: '',
        type: 'pie',
        radius: ['55%', '80%'],
        data: [
          { value: 3662, name: '重复收费' },
          { value: 282, name: '组套收费' },
          { value: 2676, name: '超标准收费' },
          { value: 282, name: '串换或套用编码收费' },
          { value: 986, name: '串换诊疗项目' },
          { value: 282, name: '多收费' },
          { value: 1127, name: '分解收费' },
          { value: 282, name: '过度诊疗收费' },
          { value: 141, name: '其他违反支付政策行为' },
          { value: 282, name: '其他' },
        ],
        label: {
          color: '#fff',
          formatter: '{b} {d}% ',
        }
      }
    ]
  };

  section4_Option = {
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
      top: "20%",
      left: "3%",
      right: "8%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisLine: {
        show: false, //隐藏x轴
      },
      axisTick: {
        show: false, //刻度线
      },
    },
    yAxis: {
      type: "value",
      name: "元",
      nameTextStyle: {
        padding: [0, 28, 0, 0], //间距分别是 上 右 下 左
      },
      minInterval: 300,
      max: 1500,
      axisLabel: {
        formatter: "{value} 万",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(8, 124, 125, .1)",
        },
      },
    },
    series: [
      {
        name: "稽查金额",
        type: "bar",
        data: [1400, 1000, 800, 600, 500, 400, 1400, 1000, 800, 600, 500, 400],
        barWidth: 16,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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

  data_list6 = [
    { name: "人员参保险种不齐", value: "8" },
    { name: "长护大病个账划转缴费重复", value: "8" },
    { name: "人均缴费基数最低的1000家名单", value: "4000" },
    { name: "单位险种到账未齐数-按险种查未到账", value: "8" },
    { name: "退休人员未达到医保年限监测（女20女20女20女）", value: "8" },
    { name: "居民已参保免缴人员名单-救助人员救助人员救助", value: "1275" },
    { name: "身份证错误数-月校验身份证证件不一致", value: "24" },
    { name: "未终止死亡人员人数监测-医保未终医保未终", value: "19133" },
    { name: "异常退费监测名单-不符合当月重复符合当月重复", value: "95" },
    { name: "身份证与人社姓名不一致-同人社身同人社身", value: "9325" },
  ];

  data_list7 = [
    { name: "人员参保险种不齐", value: "8" },
    { name: "长护大病个账划转缴费重复", value: "8" },
    { name: "人均缴费基数最低的1000家名单", value: "4000" },
  ];

  data_list8 = [
    { name: "人员参保险种不齐", value: "8" },
    { name: "长护大病个账划转缴费重复", value: "8" },
    { name: "人均缴费基数最低的1000家名单", value: "4000" },
  ];

  ngOnInit() {
    
  }
}
