// Produce a car chassis (no input, outputs new chassis object)
// Add 4 wheels to chassis (input is a chassis, output is chassis with wheels)
// Add an engine to chassis (input is a chassis, output is chassis with an engine)
// Add a steering wheel to chassis (input is a chassis, output is chassis with a steering wheel)
// Add a body to chassis (input is a chassis, output is chassis with a body)
// Add a drive train to chassis (input is a chassis, output is chassis with a drive train)


// No parameters defined because function needs nothing to do its job
const createChassis = () => {
    // Create a new object. No properties yet.
	const newChassisObject = {	}
    
	return newChassisObject
}

const addBody = (chassisObject) => {
    // Use dot notation to add a new property
    chassisObject.body = "Fever"

    // Return the chassis that now has a body property on it
    return chassisObject
}
//The addWheels() function should have a parameter for the incoming chassis object. It should add a new property to that object named wheels with a value of 4. The function should return the chassis object.

const addWheels= (newChassisObject) => {

    newChassisObject.wheels= 4
    return newChassisObject
}


//The addEngine() function should have a parameter for the incoming chassis object. It should add a new property to that object named engine with a value of "4.8L". The function should return the chassis object.

const addEngine= (newChassisObject) => {
    newChassisObject.engine = "4.8L"
    return newChassisObject
}


//The addSteeringWheel() function should have a parameter for the incoming chassis object. It should add a new property to that object named steeringWheel with a value of "Tilting". The function should return the chassis object.

const addSteeringWheel= (newChassisObject) => {
    newChassisObject.steeringWheel= "Tilting"
    return newChassisObject
}
//The addDriveTrain() function should have a parameter for the incoming chassis object. It should add a new property to that object named driveTrain with a value of "Two wheel drive". The function should return the chassis object.

const addDriveTrain= (newChassisObject) => {
    newChassisObject.driveTrain= "Two wheel drive"
    return newChassisObject
}

const chassis= createChassis()
const chassisWithBody=addBody(chassis)
const chassisWithWheels=addWheels(chassisWithBody)
const chassisWithEngine=addEngine(chassisWithWheels)
const chassisWithSteeringWheel=addSteeringWheel(chassisWithEngine)
const chassisWithDriveTrain=addDriveTrain(chassisWithSteeringWheel)

console.log(chassisWithDriveTrain)