function esVocal(letra){
    if (letra.length == 1 ){
        if (letra== "a" || "e" || "i" || "o" || "u"){
          return "Es Vocal"
        }
      } 
      else {
        return "Dato Incorrecto"
      }
}

console.log(esVocal("a"))
