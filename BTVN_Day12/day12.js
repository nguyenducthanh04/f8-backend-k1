//bai 1
const convertTime = function (time) {
  if (time === parseInt(time)) {
    let second = (time - (time % 1000)) / 1000;
    let minutes = Math.floor(second / 60);
    if (second >= 60) {
      second = second - minutes * 60;
    }
    let hour = Math.floor(minutes / 60);
    if (minutes >= 60) {
      minutes = minutes - hour * 60;
    }
    let day = Math.floor(hour / 24);
    if (hour >= 24) {
      hour = hour - day * 24;
    }
    if (day === 0 && hour === 0 && minutes === 0 && second === 0) {
      return `${time % 1000}mls`;
    } else if (day === 0 && hour === 0 && minutes === 0) {
      return `${second}s,${time % 1000}mls`;
    } else if (day === 0 && hour === 0) {
      return `${minutes}m,${second}s,${time % 1000}mls`;
    } else if (day === 0) {
      return `${hour}h,${minutes}m,${second}s,${time % 1000}mls`;
    } else {
      return `${day}d,${hour}h,${minutes}m,${second}s,${time % 1000}mls`;
    }
  } else {
    return "Dữ liệu không hợp lệ";
  }
};

console.log(convertTime(888666655544));
//Bai 2

const startDate = new Date("2020-01-01");
const endDate = new Date("2020-01-22");
const distanceDay = function (startDate, endDate) {
  let mls = endDate.getTime() - startDate.getTime();
  return mls / 1000 / 60 / 60 / 24;
};
console.log(distanceDay(startDate, endDate));
