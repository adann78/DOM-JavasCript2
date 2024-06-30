const empty=[];
console.log(empty);
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
  // Declare and initialize the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// Print the array to verify


  console.log(webTechs.length)
  console.log(countries[0])
  const middle=countries.length/2
  const red=Math.floor(middle)
  console.log(countries[red])
  
  const last=countries.length
  console.log(last)
  console.log(countries[last-1])
  console.log("____________________________")

  const itCompaniesMayusculas = itCompanies.map(company => company.toUpperCase());
  console.log(itCompaniesMayusculas)
  /*itCompanies.forEach((company, index, array) => {
    array[index] = company.toUpperCase();
});
console.log(itCompanies)
*/
console.log(itCompanies.toString() + " are big IT Companies")

console.log(itCompanies.includes("Facebook"));

function hasMoreThanOneO(companyName) {
    let count = 0;
    for (let i = 0; i < companyName.length; i++) {
        if (companyName[i].toLowerCase() === 'o') {
            count++;
            if (count > 1) {
                return true;
            }
        }
    }
    return false;
}

// Array to store filtered companies
const filteredCompanies = [];

// Iterate through the array and filter out companies
for (let i = 0; i < itCompanies.length; i++) {
    if (hasMoreThanOneO(itCompanies[i])) {
        filteredCompanies.push(itCompanies[i]);
    }
}

const primerasTres=itCompanies.slice(0,3)
console.log(primerasTres)// Print the filtered companies
const ultimasTres=itCompanies.slice(-3)
console.log(ultimasTres)// Print the fil
// Calculate the middle index
const middleIndex = Math.floor(itCompanies.length / 2);

// Use splice to remove the middle company
const removedCompany = itCompanies.splice(middleIndex, 1);
console.log(removedCompany)
// Remove the first company
const removedfirstCompany = itCompanies.shift();
console.log(`1${removedfirstCompany}`)
// Remove the last company
const removedlastCompany = itCompanies.pop();
console.log(`ultima:${removedlastCompany}`)

itCompanies.splice(0)
console.log(itCompanies)


console.log(filteredCompanies);

const ordenadas=itCompanies.sort()
console.log(ordenadas)

const alreves=itCompanies.reverse()
console.log(alreves)




