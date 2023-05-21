import { Component } from '@angular/core';

@Component({
  selector: 'levy',
  styleUrls: ['levy.component.less'],
  templateUrl: './levy.component.html',
})
export class LevyComponent {

  section1_Option = {
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
      formatter(params) {
        let relVal = params[0].name;
        for (let i = 0, l = params.length; i < l; i++) {
          relVal += `<br/>${params[i].marker}${params[i].seriesName} : ${params[i].value.toLocaleString()}`;
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
        data: ["补充医疗", "大额共济", "二乙基金", "公务员补助", "基本医疗", "离休基金", "企业生育"],
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
        data: [0.49, 0.5, 0.24, 0.64, 7.39, 0.63, 1.90],
        label: {
          show: true,
          position: [0, -15],
          formatter(a) { return a.value.toLocaleString() + '万'; },
          textStyle: {
            color: '#01E7D9',
            fontSize: 12
          }
        },
      },
      {
        name: "个人缴费",
        type: "line",
        color: "#F4D80B",
        data: [0.61, 0.69, 0.40, 0.89, 2.00, 0.50, 0],
        label: {
          show: true,
          position: [0, -30],
          formatter(a) { return a.value.toLocaleString() + '万'; },
          textStyle: {
            color: '#F4D80B',
            fontSize: 12
          }
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
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
      formatter(params) {
        let relVal = params[0].name;
        for (let i = 0, l = params.length; i < l; i++) {
          relVal += `<br/>${params[i].marker}${params[i].seriesName} : ${params[i].value.toLocaleString()}`;
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
        data: ["补充医疗", "大额共济", "二乙基金", "公务员补助", "基本医疗", "离休基金", "企业生育"],
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
        data: [0.49, 0.5, 0.24, 0.64, 1.39, 0.63, 1.90],
        label: {
          show: true,
          position: [0, -15],
          formatter(a) { return a.value.toLocaleString() + '万'; },
          textStyle: {
            color: '#01E7D9',
            fontSize: 12
          }
        },
      },
      {
        name: "个账",
        type: "line",
        color: "#F4D80B",
        data: [0.61, 0.69, 0.40, 0.89, 2.00, 0.50, 0.6],
        label: {
          show: true,
          position: [0, -30],
          formatter(a) { return a.value.toLocaleString() + '万'; },
          textStyle: {
            color: '#F4D80B',
            fontSize: 12
          }
        },
      },
    ],
  };

  ngOnInit() {
    
  }
}
