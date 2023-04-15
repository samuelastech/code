function humanReadable (seconds) {
  let mm = 0;
  let hh = 0;
  let ss = 0;

  while(seconds >= 60) {
    seconds -= 60;
    if(mm === 59){
      mm = 0;
      hh++;
    } else {
      mm++
    }
  }

  ss = seconds;
  return [hh, mm, ss].map(item => {
    return item.toString().length === 1 ? 0 + item.toString() : item;
  }).join(':');
}

console.log(humanReadable(90))