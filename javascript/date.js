const weekday = ["Sun,","Mon,","Tue,","Wed,","Thu,","Fri,","Sat,"];

const d = new Date();
const day = weekday[d.getDay()];
// console.log(day);
document.getElementById("day").innerText=day;

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let monthName = month[d.getMonth()];
// console.log(monthName);

const date=d.getDate();
// console.log(date);
const year=d.getFullYear();
// console.log(year);

const fullDate=`${monthName} ${date} ${year}`;
document.getElementById("date").innerText=fullDate;
document.getElementById("date1").innerText=fullDate;
document.getElementById("date2").innerText=fullDate;
document.getElementById("date3").innerText=fullDate;
document.getElementById("date4").innerText=fullDate;
document.getElementById("date5").innerText=fullDate;
document.getElementById("date6").innerText=fullDate;
// console.log(fullDate);


