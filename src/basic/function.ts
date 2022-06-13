export const logMessage = (message: string): void => {
  console.log("Function basic sample 1:", message)
}

type Human = {
  height: number;
  weight: number;
};
const calcBMI = ({height, weight}: Human): number => {
  return weight / height ** 2
};

const uhyo: Human = { height: 1.84, weight: 72 }
console.log(calcBMI(uhyo));

const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
}

console.log(toLowerOrUpper("Hello")) // hello
console.log(toLowerOrUpper("Hello", false)) // hello
console.log(toLowerOrUpper("Hello", true)) // HELLO