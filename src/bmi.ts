// export default function bmiCalculate() {
//   type Validatable = {
//     value: number;
//     required?: boolean;
//     min?: number;
//     max?: number;
//   }

//   // バリデーション
//   const validate = (validatable: Validatable) => {
//     let isValid: boolean = true;

//     if (validatable.required) {
//       isValid = isValid && validatable.value != 0
//     }

//     if (validatable.min != null && typeof validatable.value === 'number') {
//       isValid = isValid && validatable.value >= validatable.min;
//     }

//     if (validatable.max != null && typeof validatable.value === 'number') {
//       isValid = isValid && validatable.value <= validatable.max
//     }

//     return isValid;
//   }
  
//   const weightInput = <HTMLInputElement>document.querySelector('input[type=weight]')!;
//   const heightInput = <HTMLInputElement>document.querySelector('input[type=height]')!;
//   const button = <HTMLButtonElement>document.getElementById('button');
//   const HEIGHT_CALC: number = 0.01;


//   const clickHandler = async (e: Event) => {
//     e.preventDefault();
//     const weight = +weightInput.value;
//     const height = +heightInput.value;
//     const calculateHeight = calculateHeightDouble(height);
//     const calculateBMI = calculateBmi(calculateHeight, weight);

//     const heightValidate: Validatable = {
//       value: height,
//       required: true,
//       min: 100,
//       max: 200
//     };

//     const weightValidate: Validatable = {
//       value: weight,
//       required: true,
//       min: 1,
//       max: 900
//     };

//     if (!validate(weightValidate) || !validate(heightValidate)) {
//       alert('入力値が正しくありません');
//       return;
//     } else {
//       await calculateBMI;
//       await attachResult(calculateBMI);
//     }
//   }

//   const calculateHeightDouble = (height:number): number => {
//     let doubleHeight: number = 0;
//     let heightDecimal: number = +height * HEIGHT_CALC;
//     return doubleHeight = heightDecimal * heightDecimal;
//   }

//   const calculateBmi = (calcHeight: number, weight: number): number => {
//     return weight / calcHeight;
//   }

//   const clickFetch = () => {
//     return new Promise<void>(() => {
//       button.addEventListener('click', (e) => {clickHandler(e)});
//     })
//   }

//   const attachResult = (calculateBMI: number) => {
//     const resultTemplate = <HTMLInputElement>document.getElementById('root')!;
//     return resultTemplate.insertAdjacentHTML('beforeend', `<p>BMIの結果</p>${calculateBMI}`);
//   }

//   clickFetch();
// }