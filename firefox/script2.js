//Página comprovante de mátricula
a = document.querySelectorAll("#matriculas tbody .horario");

a.forEach((x) => {
  aux = Convert(x.innerText.split(" ")).toString();
  aux = aux.replaceAll(",", "");
  aux = aux.replaceAll(" e ", "\n");
  x.innerText = aux;
});

// Cria o dicionario relacionando código e máteria
var mat = new Map();
document.getElementById("matriculas").querySelectorAll("tbody tr").forEach((x) => {
    mat.set(
      x.getElementsByClassName("codigo")[0].innerText,
      x.getElementsByClassName("componente")[0].innerText,
    );
  });

document.querySelectorAll("#horario tbody tr td").forEach((x) => {
  console.log(x.innerText);
  if (mat.has(x.innerText)) {
    x.innerText = mat.get(x.innerText);
  }
});

function Convert(z) {
  retorno = new Array();
  for (j = 0; j < z.length; j++) {
    //escreve os dias da semana
    for (i = 0; i < z[j].length; i++) {
      switch (Number(z[j][i])) {
        case 1:
          retorno.push("Dom-");
          break;
        case 2:
          retorno.push("Seg-");
          break;
        case 3:
          retorno.push("Ter-");
          break;
        case 4:
          retorno.push("Qua-");
          break;
        case 5:
          retorno.push("Qui-");
          break;
        case 6:
          retorno.push("Sex-");
          break;
        case 7:
          retorno.push("Sáb-");
          break;
        default:
          break;
      }
      if (isNaN(Number(z[j][i + 1]))) {
        break;
      } else {
        retorno.push("e ");
      }
    }
    i++;

    turno = z[j][i];

    i++;
    //escreve os horários
    switch (turno) {
      case "M":
        switch (Number(z[j][i])) {
          case 1:
            retorno.push("7:30h");
            break;
          case 2:
            retorno.push("8:20h");
            break;
          case 3:
            retorno.push("9:30h");
            break;
          case 4:
            retorno.push("10:20h");
            break;
          case 5:
            retorno.push("11:10h");
            break;
        }

        switch (Number(z[j][z[j].length - 1])) {
          case 1:
            retorno.push("~8:20h");
            break;
          case 2:
            retorno.push("~9:10h");
            break;
          case 3:
            retorno.push("~10:20h");
            break;
          case 4:
            retorno.push("~11:10h");
            break;
          case 5:
            retorno.push("~12:00h");
            break;
        }
        break;

      case "T":
        switch (Number(z[j][i])) {
          case 1:
            retorno.push("13:30h");
            break;
          case 2:
            retorno.push("14:20h");
            break;
          case 3:
            retorno.push("15:30h");
            break;
          case 4:
            retorno.push("16:20h");
            break;
          case 5:
            retorno.push("17:10h");
            break;
          case 6:
            retorno.push("18:00h");
            break;
        }

        switch (Number(z[j][z[j].length - 1])) {
          case 1:
            retorno.push("~14:20h");
            break;
          case 2:
            retorno.push("~15:10h");
            break;
          case 3:
            retorno.push("~16:20h");
            break;
          case 4:
            retorno.push("~17:10h");
            break;
          case 5:
            retorno.push("~18:00h");
            break;
          case 6:
            retorno.push("~19:50h");
            break;
        }

        break;
      case "N":
        switch (Number(z[j][i])) {
          case 1:
            retorno.push("19:00h");
            break;
          case 2:
            retorno.push("19:50h");
            break;
          case 3:
            retorno.push("21:00h");
            break;
          case 4:
            retorno.push("21:50h");
            break;
        }

        switch (Number(z[j][z[j].length - 1])) {
          case 1:
            retorno.push("~19:50h");
            break;
          case 2:
            retorno.push("~20:40h");
            break;
          case 3:
            retorno.push("~21:50h");
            break;
          case 4:
            retorno.push("~22:40h");
            break;
        }
        break;
    }

    if (j + 1 < z.length) {
      retorno.push(" e ");
    }
  }
  return retorno;
}
