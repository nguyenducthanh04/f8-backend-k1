var music = "Vì ngày em đẹp nhất, là ngày anh mất em, dù đớn đau như vậy, đành chấp nhận ta chỉ đến đây. Mong em hạnh phúc nửa đời về sau, đâu nhất thiết phải cùng nhau.";
var keyWord = music.split(" ");
var myIndex = 0;
var colorKey = function() {
  var discolorationKey = keyWord.map(
    function(keyword, index) {
      if(index === myIndex) {
        return "<span>" + keyword + "</span>";
      }
      else {
        return keyword;
}
    });
    document.getElementById("karaoke").innerHTML = discolorationKey.join(" ");
    myIndex = (myIndex + 1) % keyWord.length;
};
setInterval(colorKey, 1000);