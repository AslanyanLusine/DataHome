function countDayOfYear(first, second) {
    let day = 24 * 60 * 60 * 1000;
    let result = Math.abs(second - first) / day;
    return result;
  }

  const first = new Date(2023,8,12);
  const second = new Date(2024,8,9);
  console.log(countDayOfYear(first,second))