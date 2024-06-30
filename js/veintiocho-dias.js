const d=document;

export default function veintiocho(id){
const $veintiocho=d.getElementById(id)

 const fecha=new Date();
 console.log(fecha)

 let vo=fecha.setDate(fecha.get + 28);

console.log(vo)
}