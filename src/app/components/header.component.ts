import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "header",
  styleUrls: ["header.component.less"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  hideGoBack = true;

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
    let month = (date.getMonth() + 1).toString(); //获取当前月份
    let day = date.getDate().toString(); //获取当前日
    let hours = date.getHours().toString(); //获取小时
    let minutes = date.getMinutes().toString(); //获取分钟
    let seconds = date.getSeconds().toString(); //获取秒
    if (month.length === 1) {
      month = '0' + month
    }
    if (day.length === 1) {
      day = '0' + day
    }
    if (hours.length === 1) {
      hours = '0' + hours
    }
    if (minutes.length === 1) {
      minutes = '0' + minutes
    }
    if (hours.length === 1) {
      seconds = '0' + seconds
    }
    const result = {
      date: year + "/" + month + "/" + day,
      time: hours + ":" + minutes + ":" + seconds,
      day: this.getWeekday()
    };
    this.currentDate = result;
  };

  ngOnInit() {
    setInterval(this.renderDate, 1000);
    if (window.location.pathname !== '/') {
      this.hideGoBack = false;
    }
  }
}
