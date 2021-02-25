function count() {
  var fstart = document.getElementById("txtstart");
  var fend = document.getElementById("txtend");
  var fstep = document.getElementById("txtstep");
  var res = document.getElementById("res");
  if (fstart.value.length == 0 || fend.value.length == 0 || fstep.value.length == 0) {
    window.alert("[ERROR] Please Enter a valid number");
  } else {
    res.innerHTML = `Count: <br>`
    var start = Number(fstart.value);
    var end = Number(fend.value);
    var step = Number(fstep.value);
    if (step <= 0) {
      window.alert("WARNING !! Let's consider step = 1 ")
      step = 1;
    }
    if (start < end) {
      for (var s = start; s <= end; s += step) {
        res.innerHTML += `${s} \u{1F449}`;
      }
    } else
      for (var s = start; s >= end; s -= step) {
        res.innerHTML += `${s} \u{1F449}`;
      }
  }
  res.innerHTML += `\u{26D4}`;
}