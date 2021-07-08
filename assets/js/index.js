function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),
    btnDel: document.querySelector(".btn-del"),

    inicia(nome = "usuário") {
      // alert(`Olá ${nome}, bem vindo a calculadora! \nCalculadora iniciada!`);
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    calculate() {
      let valor = this.display.value;
      if (valor.match("^\\d")) {
        try {
          this.display.value = eval(valor);
        } catch (e) {
          alert("Conta inválida");
          this.display.value = "";
        }
      } else {
        alert("Digite apenas números");
        this.display.value = "";
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.calculate()
        }
      });
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    cliqueBotoes() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.calculate();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
// let nome = prompt('Informe seu nome');
// if(nome == null){
//     nome = undefined;
// }
calculadora.inicia();
