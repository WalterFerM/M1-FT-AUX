function timeConversion(time){
// dada la hora en formato hora AM/PM , convertir a la hora militar (24-horas).
// Recordar: las 12:00:00AM en un reloj de 12 horas son las 00:00:00 
// en un reloj de 24 horas
// las 12:00:00PM en un reloj de 12 horas son las 12:00:00 en un 
// reloj de 24 horas 
    // console.log(time);
    // console.log(time[8]);
    let ampm = time.slice(8, 10)
    // console.log(ampm)
    let hour = time.slice(0,2);
    // console.log(hour);
    let minutes =time.slice(3, 5);
    // console.log(minutes);
    let seg = time.slice(6, 8);
    // console.log(seg);
    
    
    if(ampm === 'AM' && hour > 0 && hour < 13){
        if (hour < 12 && minutes < 60 && seg < 60){
            // console.log(time);
            return time.slice(0, 8);
        } else if (hour < 13  && minutes < 60 && seg < 60){
            // console.log(time);
            hour = '00';
            // let tem =[hour, minutes, seg];
            // console.log(tem);
            // console.log(tem.join(':'))
            return [hour, minutes, seg].join(':');
        } else return false;
    } 
    else if (ampm === 'PM' && hour >0 && hour <13){
        if(hour === '12' && minutes < 60 && seg < 60){
            return time.slice(0, 8)
        } else if (hour < 12 && minutes < 60 && seg){
            hour = (hour * 2) - (hour-12)
            console.log(hour);
            return [hour, minutes, seg].join(':')
            
        } else return false;
    }
    return false;
}



// let time = "60:00:00PM"

// console.log(timeConversion(time))
module.exports = {
    timeConversion
}