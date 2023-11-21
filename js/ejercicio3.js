let perimetro = 0;
let area = 0;

class Rectangulo {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }
  get alto() {
    return this._alto;
  }
  get ancho() {
    return this._ancho;
  }
  set alto(nuevoAlto) {
    if (nuevoAlto > 0) {
      this._alto = nuevoAlto;
    } else {
      document.write("Ingrese un alto valido");
    }
  }
  set ancho(nuevoAncho) {
    if (nuevoAncho > 0) {
      this._ancho = nuevoAncho;
    } else {
      document.write("Ingrese un ancho valido");
    }
  }
  perimetro() {
    perimetro = 2 * this._alto + 2 * this._ancho;
    return perimetro;
  }
  area() {
    area = this._alto * this._ancho;
    return area;
  }
}

const rectangulo1 = new Rectangulo(6, 10);

document.write(`<ul>
<li>El alto del rectángulo es: ${rectangulo1.alto} cm</li>
<li>El ancho del rectángulo es: ${rectangulo1.ancho} cm</li>
<li>El perimetro del rectángulo es: ${rectangulo1.perimetro()} cm</li>
<li>El área del rectángulo es: ${rectangulo1.area()} cm</li>
</ul>`);
