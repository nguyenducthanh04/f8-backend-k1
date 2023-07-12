// var music = "Vì ngày em đẹp nhất, là ngày anh mất em, dù đớn đau như vậy, đành chấp nhận ta chỉ đến đây. Mong em hạnh phúc nửa đời về sau, đâu nhất thiết phải cùng nhau.";
// var keyWord = music.split(" ");
// var myIndex = 0;
// var colorKey = function() {
//   var discolorationKey = keyWord.map(
//     function(keyword, index) {
//       if(index === myIndex) {
//         return "<span>" + keyword + "</span>";
//       }
//       else {
//         return keyword;
// }
//     });
//     document.getElementById("karaoke").innerHTML = discolorationKey.join(" ");
//     myIndex = (myIndex + 1) % keyWord.length;
// };
// setInterval(colorKey, 1000);
//  var luongcoban, thue, luongthucnhan;
//  var luongcoban = 5;
//  if(luongcoban <= 5) {
//   luongthucnhan = luongcoban - (luongcoban * 5) / 100;
//  }
//  else if(luongcoban >= 5 && luongcoban <= 10) {
//   luongthucnhan = luongcoban - (luongcoban * 7) / 100;
//  }
//  else if(luongcoban > 10) {
//   luongthucnhan = luongcoban - (luongcoban * 10) / 100;
//  }
//  console.log(`Lương sau khi trừ thuế đi là: ${luongthucnhan}`);

var dtb = 3;
if(dtb < 5) {
    console.log("Xếp loại học lực yếu");
}
else if(dtb >= 5 && dtb < 6) {
    console.log("Xếp loại học lực trung bình");
}
else if(dtb >= 6.5 && dtb < 8) {
    console.log("Xếp loại học lực khá");
}
else if(dtb >= 8 && dtb < 10) {
    console.log("Xếp loại học lực giỏi");
}
else if(dtb == 10) {
    console.log("Xếp loại học lực xuất sắc");
}