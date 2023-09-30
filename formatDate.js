
  function formatDate(str) {
  const date = new Date(str)
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let formattedDate = months[date.getMonth()] + ' ' + date.getDate()  + "," + date.getFullYear()
  return formattedDate;
  }

  console.log(formatDate("2023,9,5"))