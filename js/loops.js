const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

  for(let i=0;i<10;i++){
    console.log(countries[i])
    
  }
  console.log("____________________")
  for(let i=10;i>=0;i--){
    console.log(countries[i])
  }

  for(let i=1;i<8;i++){
    console.log("#".repeat(i))
    
  }
  for(let i=0;i<100;i++){
    mult=i*i
    console.log(`${i}*${i}=${mult}`);
    if (i==10){
    break;
    }
  }
  console.log("____________________")
  for(let i=0;i<11;i++){
    e2=Math.pow(i,2)
    e3=Math.pow(i,3)
    console.log(`${i}" "${e2}" "${e3}`)
  }
  console.log("____________________")
  for (let i = 0; i <= 100; i += 2) {
    console.log(i);
  }
  console.log("____________________")
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
  console.log("____________________")
  let sum=0
  for (let i = 0; i <= 100; i++) {
   sum=sum+=i
  
  }
  console.log("The sum of all numbers from 0 to 100 is"+sum)  
  console.log("____________________")
  let evens=0;
  let odds=0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
    evens=evens+=i
  }else if (i % 2 === 1)
    odds=odds+=i
}
console.log("The sum of all evens from 0 to 100 is "+evens)  
console.log("The sum of all odss from 0 to 100 is "+odds)  

//Develop a small script which generate array of 5 random numbers

let min = 0;
let max = 100;
const randomArray=[]
for (let i = 0; i < 5; i++) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomArray.push(randomNumber);
}
console.log(randomArray)
