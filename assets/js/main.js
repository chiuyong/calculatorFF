function createCalculator() {
  return {
    display: document.querySelector('.display'),
    initialize() {
      this.clickButtons();
      this.pressEnter();
    },
    clickButtons() {
      document.addEventListener('click', (e) => { // using arrow function => this refers to calculator, not document anymore
        const el = e.target;
        if (el.classList.contains('btn-num')) this.btnToDisplay(el.innerText);
        if (el.classList.contains('btn-clear')) this.clearDisplay();
        if (el.classList.contains('btn-del')) this.delOne();
        if (el.classList.contains('btn-eq')) this.makeCalc();
      });
    },
    btnToDisplay(value) {
      this.display.value += value;
    },
    clearDisplay() {
      this.display.value = '';
    },
    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    makeCalc() {
      let calc = this.display.value;
      try {
        calc = eval(calc);
        if (!calc) {
          alert('Invalid calculation');
          return;
        }
        this.display.value = String(calc);
      } catch (e) {
        alert('Invalid calculation');
        return;
      }
    },
    pressEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.makeCalc();
      });
    }
  }
}

const calculator = createCalculator();
calculator.initialize();