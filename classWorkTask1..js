
function monthsInterval(firstMonth, secondMonth) {
    const monthArr = [];
    let months = {
        1:'January',
        2:'Februray',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'June',
        9: 'Ogostos',
        10: 'September',
        11: 'October',
        12: 'December'
    }
    let start = firstMonth.getMonth();//11
    let end = secondMonth.getMonth();//0
    if(start > end) {
        start = secondMonth.getMonth();
        end = firstMonth.getMonth();
    }


    monthArr = [...monthArr, months]
}

let december = new Date(2017, 11, 1); 
let january = new Date(2018, 0, 1); 
monthsInterval(december,january)