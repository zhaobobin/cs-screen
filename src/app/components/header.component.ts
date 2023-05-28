import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "header",
  styleUrls: ["header.component.less"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  constructor(router: Router) {
    this.hideGoBack = true;
    if (router.url !== "/") {
      this.hideGoBack = false;
    }
  }

  currentDate: any = {
    date: "",
    time: "",
    day: "",
  };

  getWeekday = () => {
    var weekday = new Array(7);
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    var today = new Date();
    return weekday[today.getDay()];
  };

  renderDate = () => {
    const date = new Date();
    const year = date.getFullYear(); //获取当前年份
    const month = date.getMonth() + 1; //获取当前月份
    const day = date.getDate(); //获取当前日
    const hours = date.getHours(); //获取小时
    const minutes = date.getMinutes(); //获取分钟
    const seconds = date.getSeconds(); //获取秒
    const result = {
      date: year + "/" + month + "/" + day,
      time: hours + ":" + minutes + ":" + seconds,
      day: this.getWeekday()
    };
    this.currentDate = result;
    console.log(this.currentDate);
  };

  ngOnInit() {
    setInterval(this.renderDate, 1000);
  }
}
