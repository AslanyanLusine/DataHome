const formatDate = (date) => {
    const monthArr = ["January", "Feb","March", "April", "May", "June", "July", "Aug", "Sep", "October", "Nov", "December"];
    let monthName = new Date(date).getMonth();
    return monthArr[monthName]
    };
    console.log("Actual output: ", formatDate(new Date("2020-05-14")));
    console.log("Expected output", "14 May 2020");