// Nomor 1
function calculateAge(birthYear){
	return 2019 - birthYear;
}
 
const yearUntilRetirement = (year, firstName) => {
	let age = calculateAge(year);
	let retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${firstName} +  is already retired.`);
	}
}
 yearUntilRetirement(1987,'John');

// Nomor 2
const addNumber = (...numbers) => {
    console.log(numbers);
    let sum = 0;
    numbers.forEach(number=>sum+=number);
    return sum;
}
console.log(addNumber(1,2,3,4,5,6,7));

// Nomor 3
let phi = 3.14;
let power = 2;
let radius = 0;
 
let calculateArea = (radius, power) => {
  return phi * Math.pow(radius, power);
};
 
radius = 21;
let area21 = calculateArea(radius, 2);
 
radius = 7;
let area7 = calculateArea(radius, 2);
 
console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// Nomor 4
const makeAjaxRequest = (url, method) => {
    if(!method){
           method = 'GET';
    }
    console.log(url, method);
}
makeAjaxRequest('www.google.com');

// BAGIAN 2

// Nomor 1
const warnaKesukaan = (warna) => {
    return `Warna kesukaan saya adalah ${warna}.`;
}
console.log(warnaKesukaan('putih'));

// Nomor 2
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka']

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log (semuaNamaBuah);