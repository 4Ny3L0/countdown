let fechaObjetivo = "01/01/2021";
let date = new Date();
let numeros = document.querySelectorAll(".numeros");
let message = document.querySelector(".message");
let fechaActual =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

// date.getSeconds();
let seconds = date.getSeconds();
// date.getMinutes()
let minutes = date.getMinutes();
// date.getHours();
let hours = date.getHours();
let days = 27;

if (fechaObjetivo === fechaActual) {
  console.log("Feliz año nuevo");

  message.innerHTML = "Feliz año nuevo";
  for (let numero of numeros) {
    numero.innerHTML = 0;
  }
} else {
  let myInterval = setInterval(function () {
    seconds = seconds - 1;
    if (seconds == 0) {
      minutes = minutes - 1;
      seconds = 20;

      if (minutes < 0) {
        hours = hours - 1;
        minutes = 1;
        if (hours < 0) {
          days = days - 1;
          hours = 1;
          if (days < 0) {
            days = 0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            clearInterval(myInterval);
            message.innerHTML = "Feliz año nuevo";
            fechaActual = "01/01/2021";
          }
        }
      }
    }
    numeros[0].innerHTML = days;
    numeros[1].innerHTML = hours;
    numeros[2].innerHTML = minutes;
    numeros[3].innerHTML = seconds;
    // console.log(
    //   "Dias: " +
    //     days +
    //     " Horas: " +
    //     hours +
    //     " Minutos: " +
    //     minutes +
    //     "  Segundos: " +
    //     s
    // );
  }, 1000);
}
