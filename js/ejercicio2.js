class NuevaCuenta {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valorIngresado) {
    this.saldo = this.saldo + valorIngresado;
    document.write(
      `Usted ingreso $${valorIngresado}, su saldo es $${this.saldo}<br>`
    );
  }
  extraer(valorRetirado) {
    this.saldo = this.saldo - valorRetirado;
    document.write(
      `Usted retiro $${valorRetirado}, su saldo es $${this.saldo}<br>`
    );
  }
  informar() {
    document.write(`Titular: ${this.titular} <br>
    Saldo: $${this.saldo}<br>`);
  }
}

const cuenta = new NuevaCuenta("Alex", 0);

document.write("<h1>Cuenta</h1>")

cuenta.informar();
cuenta.ingresar(1200);
cuenta.extraer(500);
cuenta.informar();
