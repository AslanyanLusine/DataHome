 function day(str) {
    let date = new Date(str);
    let year =  date.getFullYear()
    const firstYearDate = new Date(year, 0, 1);
    let ms = date - firstYearDate;
    let day = ms / 86400000 + 1;
    return day
 }
 console.log(day("12/13/2020"))
