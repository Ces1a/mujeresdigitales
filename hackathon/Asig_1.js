let a= "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\\]+~"

let b= a.replaceAll( "()", " ").replaceAll("?", "a").replaceAll("[", "e").replaceAll("~", "o").replaceAll("¬", "ó").replaceAll("+","u").replaceAll("}","q").replaceAll("¿","y").replaceAll("{","s").replaceAll("=","t").replaceAll("%","b").replaceAll("]","n").replaceAll("¡","d").replaceAll("$","r").replaceAll("!","j").replaceAll("^","m").replaceAll("`","c").replaceAll("-","h").replaceAll("*","p").replaceAll("/","l").replaceAll("#","v").replaceAll(";","f").replaceAll("_","Z").replaceAll("\\", "i")


let frase = b.split()

let C= b+ a.replaceAll()
console.log("texto", frase);
