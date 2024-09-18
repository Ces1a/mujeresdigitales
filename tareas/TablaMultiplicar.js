function TablaMultiplicar(Num) {
  console.log(`Tabla de multiplicar del ${Num}`);

  for (let i = 1; i <= 10; i++) {
    let resultado = Num * i;
    console.log(`${Num} x ${i} = ${resultado}`);
  }
}
//Cambiar el Numero (x) a la tabla que se desea crear. 
let Numero = x ;
TablaMultiplicar(Numero);
