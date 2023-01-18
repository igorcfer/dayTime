function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("photo");
  var nowDate = new Date();
  var time = nowDate.getHours();
  var timeMin = nowDate.getMinutes();
  var timeSec = nowDate.getSeconds();
  msg.innerHTML = `The time now is ${time}:${timeMin}:${timeSec}`;

  if (time >= 0 && time < 12) {
    //Good Morning!
    img.src = "fotomanha.png";
    document.body.style.background = "#ffe56a";
  } else if (time > 12 && time <= 18) {
    //Good Afternn32on!
    img.src = "fototarde.png";
    document.body.style.background = "#cec5be";
  } else {
    //Good Night!
    img.src = "fotonoite.png";
    document.body.style.background = "#1f2924";
  }
}
