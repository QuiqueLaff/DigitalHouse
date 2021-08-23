let autos = require('./autos' );

const concesionaria = {
   autos: autos,
  
  buscarAuto: function buscarAuto (pat){
    let modeloDeAuto = null
    for (let i = 0 ; i < autos.length; i ++){
      if (autos[i].patente == pat){
          modeloDeAuto = autos[i]
        }
      }
      return modeloDeAuto
    },
    
    venderAuto: function(pat){
        if (this.buscarAuto(pat) != null) {
           let indice = this.autos.indexOf(this.buscarAuto(pat));
           this.autos[indice].vendido = true;
        }    
        return autos
  },
  
  autosParaLaVenta: function(){
      return autos.filter(i => i.vendido == false)
},
  autosNuevos: function (){
      return this.autosParaLaVenta().filter(i => i.km < 100)
  },

  listaDeVentas: function(){
    let ventas = [];
    this.autos.forEach(function(a){
       if (a.vendido == true){
          ventas.push(a.precio);         
       }
    });
    return ventas;
 },

totalDeVentas: function (){
  let listadoVentas = this.listaDeVentas();
  if (listadoVentas.length== 0) 
  return 0;
  totalVentas = listadoVentas.reduce(function(acu,num){
    return acu + num;
  });
return totalVentas;
},
puedeComprar: function (auto, persona){    
        if (auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas && auto.precio <= persona.capacidadDePagoTotal){
           return true
        }else return false
    },
    autosQuePuedeComprar: function(persona){
        let autosParaLaVenta = this.autosParaLaVenta();
        let autosKePuedeKomprar =[];
        for (i = 0; i < autosParaLaVenta.length; i++ ){
          if(this.puedeComprar(autosParaLaVenta[i], persona))
          autosKePuedeKomprar.push(autosParaLaVenta[i]);
        }
        return  autosKePuedeKomprar;


}
}
