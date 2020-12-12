let fechaObjetivo = { dia: 1, mes: 01, anio: 2021 };
let date = new Date();
let numeros = document.querySelectorAll(".numeros");
let message = document.querySelector(".message");
let fechaActual = {
  dia: date.getDate(),
  mes: date.getMonth() + 1,
  anio: date.getFullYear(),
};
// let fechaActual = { dia: 30, mes: 09, anio: 2020 };
let meses = {
  1: 31,
  2: 28,
  3: 30,
  4: 31,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
// console.log(fechaActual);
//Variables del tiempo actual
let today = date.getDate();
let hourNow = date.getHours();
let minutesNow = date.getMinutes();
let secondsNow = date.getSeconds();

//variables del tiempo restante
let totalDays;
let dayRest;
let me;
let hourRest = 23;
let minutesRest = 59;
let secondsRest = 59;
let d;

const process = (dayRest = fechaObjetivo.dia - today - 1) => {
  // totalDays = 31 - today;
  // dayRest = fechaObjetivo.dia - today - 1;
  // console.log(dayRest);
  hourRest = hourRest - hourNow;
  // hourRest = 1;
  minutesRest = minutesRest - minutesNow;
  // minutesRest = 1;
  secondsRest = secondsRest - secondsNow;
  // secondsRest = 5;
  let myInterval = setInterval(function () {
    secondsRest = secondsRest - 1;
    if (secondsRest < 0) {
      secondsRest = 59;
      // secondsRest = 5;
      minutesRest = minutesRest - 1;
      if (minutesRest < 0) {
        minutesRest = 59;
        // minutesRest = 0;
        hourRest = hourRest - 1;
        if (hourRest < 0) {
          hourRest = 23;
          // hourRest = 0;
          dayRest = dayRest - 1;
          if (dayRest < 0) {
            secondsRest = 0;
            minutesRest = 0;
            hourRest = 0;
            dayRest = 0;
            numeros[0].replaceWith(21);
            clearInterval(myInterval);
          }
        }
      }
    }

    // console.log(
    //   "Diciembre, dias restantes para el " +
    //     fechaObjetivo.dia +
    //     " : " +
    //     dayRest +
    //     ", Horas restantes: " +
    //     hourRest +
    //     ", Minutos restantes: " +
    //     minutesRest +
    //     ", Segundos restantes: " +
    //     secondsRest
    // );

    numeros[1].innerHTML = dayRest;
    numeros[2].innerHTML = hourRest;
    numeros[3].innerHTML = minutesRest;
    numeros[4].innerHTML = secondsRest;
  }, 1000);
};

//escenario en que el fecha objetivo esta en un año posterior
if (fechaObjetivo.anio > fechaActual.anio) {
  if (fechaObjetivo.mes < fechaActual.mes) {
    let tdays = 0;
    let mult = 0;
    for (let i = 0; i < fechaObjetivo.mes; ++i) {
      tdays = tdays + meses[i + 1];
      console.log(tdays);
    }
    tdays = tdays + fechaObjetivo.dia;
    mult = fechaObjetivo.anio - fechaActual.anio;
    tdays = tdays * mult;
    dayRest = meses[fechaActual.mes] - today;
    console.log("el mes objetivo es :" + fechaObjetivo.mes);
    console.log("Dias totales " + tdays);
  } else {
    let tdays = 0;
    for (let i = 0; i < fechaObjetivo.mes; ++i) {
      tdays = tdays + meses[i];
    }
    console.log("el mes objetivo es :" + fechaObjetivo.mes);
    console.log("Dias totales " + tdays);
  }
  console.log("esta fecha es para el otro año");

  process(dayRest);
  //escenario en que el fecha objetivo esta en el año actual
} else if (fechaObjetivo.anio == fechaActual.anio) {
  if (fechaObjetivo.mes > fechaActual.mes) {
    let idMesO = fechaObjetivo.mes;
    let idMesA = fechaActual.mes;
    let daysUntil = meses[idMesA] - fechaActual.dia;
    console.log(daysUntil + " , dias restantes del mes actual");
    // if (daysUntil > 0) {
    //   daysUntil = daysUntil - 1;
    //   console.log(daysUntil + " , dias restantes del mes actual2");
    // }
    totalDays = daysUntil + fechaObjetivo.dia - 1;
    console.log(
      totalDays + " , dias restantes del mes actual con el mes objetivo"
    );
    me = fechaObjetivo.mes - fechaActual.mes - 1;
    console.log(me);
    let mesesEnMedio = 0;
    for (let i = idMesA + 1; i < idMesO; i++) {
      mesesEnMedio = mesesEnMedio + meses[i];
      console.log(mesesEnMedio);
    }
    totalDays = totalDays + mesesEnMedio;
    // console.log(mesesEnMedio);
    process(totalDays);

    console.log("la fecha es valida");
  } else if (fechaObjetivo.mes == fechaActual.mes) {
    totalDays = fechaObjetivo.dia - fechaActual.dia - 1;
    if (fechaObjetivo.dia > fechaActual.dia) {
      process(totalDays);
    } else {
      numeros[1].innerHTML = 0;
      numeros[2].innerHTML = 0;
      numeros[3].innerHTML = 0;
      numeros[4].innerHTML = 0;
      console.log("Dia anterior al actual, no se cumple");
    }
  } else {
    numeros[1].innerHTML = 0;
    numeros[2].innerHTML = 0;
    numeros[3].innerHTML = 0;
    numeros[4].innerHTML = 0;
    console.log("Esta fecha ya pasó");
  }
  console.log("Esta fecha es del año actual");

  //escenario en que el fecha objetivo es una fecha del pasado o invalida
} else {
  numeros[1].innerHTML = 0;
  numeros[2].innerHTML = 0;
  numeros[3].innerHTML = 0;
  numeros[4].innerHTML = 0;
  console.log("Esta fecha ya pasó");
}
