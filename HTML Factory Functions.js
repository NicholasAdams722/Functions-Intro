// Object representing Ringer
// const dog = {
// 	name: "Ringer",
// 	age: 4,
// 	breed: "Cocker Spaniel"
// }

// Define a function to convert the object to a string
// const dogHTMLMaker = (dogObject) => {
// Make some HTML to represent the dog
// 	const dogHTMLSection = `<section>${dogObject.name} the ${dogObject.breed} is ${dogObject.age} years old/section>`

// Return the HTML
// 	return dogHTMLSection
// }

// Invoke the function and give the minion what it needs to do its job.
// const stringReturnedFromFunction = dogHTMLMaker(dog)

// console.log(stringReturnedFromFunction)

// > "<section>Ringer the Cocker Spaniel is 4 years old/section>"

//Starter Code (Object)

const computer = {
  id: 1,
  manufacturer: "Apple",
  make: "Macbook",
  model: "Pro",
  specs: {
    memory: 32,
    hardDrive: "500 GB",
    processor: 2.4,
  },
};

//Mission:  Define a function that takes an object as input (needs a parameter), and outputs (returns) the following HTML representation.

/*<section id="computer--1">
  <h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section>
*/

const macHtmlMaker = (computerObject) => {
  const newHtmlObject = `<section id="computer--${computerObject.id}">
<h1>${computerObject.manufacturer} ${computerObject.make}</h1>
<div>Model: ${computerObject.model}</div>
<div>Memory: ${computerObject.specs.memory}</div>
<div>Hard drive space: ${computerObject.specs.hardDrive}</div>
<div>Processor speed: ${computerObject.specs.processor}</div>
</section>`;

  return newHtmlObject;
};

const stringReturnedFromFunction = macHtmlMaker(computer);

console.log(stringReturnedFromFunction);

// for (const flower of flowers){
//   flowersHTMLString += `\n<article>${flower.type}`;
//   for (const color of flower.colors) {
//     flowersHTMLString += `\n<section>${color}</section>\n`;}
//     for (const zone of flower.usdaZones){
//       flowersHTMLString += `\n<div>${zone}</div>\n`
//     }

//   flowersHTMLString +="</article>\n"
// }

// return flowersHTMLString; // Do not modify
// };
// console.log(flowersAsHTML())
