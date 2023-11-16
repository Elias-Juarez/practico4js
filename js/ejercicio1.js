const auto = {
  color: "azul",
  marca: "audi",
  modelo: 2022,
  encendido() {
    document.write(`Auto encendido <br>`);
  },
  apagado() {
    document.write(`El auto se apagó`);
  },
};

auto.encendido();
auto.apagado();
