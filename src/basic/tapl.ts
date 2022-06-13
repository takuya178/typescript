type Admin = {
  name: string;
  privileges: string[];
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log(emp.name);
  if ('privileges' in emp) {
    console.log("Priveleges: " + emp.privileges)
  }
  if ('startDate' in emp) {
    console.log("startDate: " + emp.startDate)
  }
}

interface Bird {
  type: 'bird',
  flyingSpeed: number;
}
interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed
  }
  console.log('移動速度: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })