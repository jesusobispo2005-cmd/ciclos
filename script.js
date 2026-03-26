let contador=0;

while(contador<=10) {
    console.log(`sumar: ${contador}`)
    contador=contador+1 
}
console.log("/////////////////////////////////////")

do{
    console.log("restar:", contador)
    contador--;
}while(contador>=0)
console.log("/////////////////////////////////////")

   
for (a=0;a<=10;a++){
    console.log("ciclo for: "+a)
}
console.log("/////////////////////////////////////")
const arreglo=["platano", "gato", "estrella", "universo", "paginador", "donut", "noche", "perro", a]

arreglo.forEach((item, index)=>{
    console.log("foreach: ",item)
    console.log("foreach: ",index)
})