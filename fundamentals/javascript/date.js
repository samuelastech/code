/** Getting the name of the day of the week */
let date = new Date();

switch (date.toString().slice(0, 3)) {
  case "Sun": console.log('Sunday');
    break;
  case "Mon": console.log('Monday');
    break;
  case "Tue": console.log('Tuesday');
    break;
  case "Wed": console.log('Wednesday');
    break;
  case "Thu": console.log('Thursday');
    break;
  case "Fri": console.log('Friday');
    break;
  case "Sat": console.log('Saturday');
    break;
}
