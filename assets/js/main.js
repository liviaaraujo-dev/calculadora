const calculadora = {
  display: document.querySelector('.display'),

  inicia() {
    this.capturaCliques();
    this.capturaEnter();
  },

  capturaEnter() {
    document.addEventListener('keyup', event => {
      if (event.keyCode === 13) {
        this.realizaConta();
      }
    });
  },

  capturaCliques() {
    document.addEventListener('click', event => {
      const element = event.target;
      if (element.classList.contains('btn-num')) this.addNumDisplay(element);
      if (element.classList.contains('btn-clear')) this.clear();
      if (element.classList.contains('btn-del')) this.del();
      if (element.classList.contains('btn-eq')) this.realizaConta();
    });
  },

  realizaConta() {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  },

  addNumDisplay(element) {
    this.display.value += element.innerText;
    this.display.focus();
  },

  clear(){
    this.display.value = '';
  },

  del() {
    this.display.value = this.display.value.slice(0, -1);
  }

}

calculadora.inicia();
