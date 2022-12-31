// // import { quizType } from './type/auth_type'

// import { quizType } from "./type/auth_type";
// import { imgSrcAndBoolList } from "./type/auth_type";

// // 画像をランダムに表示するため1~9のランダム値を入れる。
// export const randomNumberList: number[] = [];
// const min = 0;
// const max = 8;

// const intRandom = (min: number, max: number) => {
//   return Math.floor( Math.random() * (max - min + 1)) + min;
// }

// for (let i = min; i <= max; i++) {
//   while(true) {
//     let randomNumber = intRandom(min, max);
//     if(!randomNumberList.includes(randomNumber)){
//       randomNumberList.push(randomNumber);
//       break;
//     }
//   }
// }

//   export const quiz: quizType = [
//     {
//       quizText: "トイプードルを全て選んでください",
//       quizImageList: [
//         {imgSrc: '../static/pudol1.png', judge: true},
//         {imgSrc: '../static/pudol2.jpeg', judge: true},
//         {imgSrc: '../static/pudol3.jpeg', judge: true},
//         {imgSrc: '../static/pudol4.jpeg', judge: true},
//         {imgSrc: '../static/tichen.webp', judge: false},
//         {imgSrc: '../static/tichen2.webp', judge: false},
//         {imgSrc: '../static/tichen3.jpeg', judge: false},
//         {imgSrc: '../static/tichen4.jpeg', judge: false},
//         {imgSrc: '../static/tichen5.jpeg', judge: false},
//       ]
//     },
//     {
//       quizText: "トータルテンボスを全て選んでください",
//       quizImageList: [
//         {imgSrc: '../static/afro1.jpeg', judge: true},
//         {imgSrc: '../static/afro2.jpeg', judge: false},
//         {imgSrc: '../static/afro3.jpeg', judge: false},
//         {imgSrc: '../static/afro4.jpeg', judge: true},
//         {imgSrc: '../static/afro5.jpeg', judge: false},
//         {imgSrc: '../static/afro6.jpeg', judge: true},
//         {imgSrc: '../static/afro7.jpeg', judge: false},
//         {imgSrc: '../static/afro8.jpeg', judge: false},
//         {imgSrc: '../static/afro9.jpeg', judge: false},
//       ]
//     }
//   ]


//   // const rodingFalseImage = (img: HTMLImageElement, src: imgSrcAndBoolList) => {
//   //   img.src = src.imgSrc
//   //   img.width = IMG_WIDTH;
//   //   img.height = IMG_HEIGHT;
//   //   img.classList.add('grid-item');
//   //   return {
//   //     img: img,
//   //     judge: src.judge
//   //   }
//   // }

//   // rodingFalseImage(<HTMLImageElement>document.createElement("img"), quiz[0].quizImageList[0])