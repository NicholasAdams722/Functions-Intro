// Buy some milk chocolate
// Add some mint flavoring
// Combine the chocolate and mint
// Bake the mixture
// Break the hardened sheet into 6 pieces
// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

const buyChocolate = () => {
    const newCandyObject= {
        property: "Milk Chocolate"
    }
  return newCandyObject
};

// Define a function named addFlavoring. The function needs one parameter to accept an object as input. It should add a new flavor property to the object with a value of "Mint".


const addFlavoring = (newCandyObject) => {
  newCandyObject.newFlavor = "Mint";
  
  return newCandyObject;
};

// Define a function named makeBarkMixture. It should have one parameter for an incoming object to be stored for use in the function.

// Time for another if block. This time, you will also need a corresponding else block.

// The function must verify that the right flavor is being used to make the mixture. If the flavor property on the object is equal to "Mint", then you should add a new mixed property to the object with a value of true. If the flavor is not "Mint" then the property value should be false.

const makeBarkMixture = (newCandyObject) => {
  if (newCandyObject.newFlavor === "Mint") {
    newCandyObject.mintFlavored = true;
  } else {
    newCandyObject.mintFlavored = false
  }
  return newCandyObject
};

// Define a function named bakeCandy. It should have one parameter for an incoming object to be stored for use in the function.

// Time for another if block. This time, you will also need a corresponding else block.

// The function should check if the mixed property on the incoming object has a value of true. If it does, then add a baked property to the object with a value of true.

// If the mixed property is not true, then add a baked property with a value of false.

const bakeCandy = (newCandyObject) => {
    if (newCandyObject.mintFlavored === true){
        newCandyObject.baked=true
    } else {
        newCandyObject.baked =false
    }
       return newCandyObject

};


const breakBark = (newCandyObject) => {
    if (newCandyObject.baked === true){
        return["Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece","Mint Chocolate Bark Piece"]
    }
    return newCandyObject
}


const step1= buyChocolate()
const step2= addFlavoring(step1)
const step3= makeBarkMixture(step2)
const step4= bakeCandy(step3)
const step5= breakBark(step4)

console.log(step5)
