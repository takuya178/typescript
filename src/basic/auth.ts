// import { quiz } from "./quizList";
// import { randomNumberList } from "./quizList";
// import { Image } from "./type/auth_type";

// export default function authQuiz() {  
//   const $main = <HTMLElement>document.getElementById('top')!;
//   const button = <HTMLButtonElement>document.getElementById('button')!;
//   let img1 = <HTMLImageElement>document.createElement("img")
//   let img2 = <HTMLImageElement>document.createElement("img")
//   let img3 = <HTMLImageElement>document.createElement("img")
//   let img4 = <HTMLImageElement>document.createElement("img")
//   let img5 = <HTMLImageElement>document.createElement("img")
//   let img6 = <HTMLImageElement>document.createElement("img")
//   let img7 = <HTMLImageElement>document.createElement("img")
//   let img8 = <HTMLImageElement>document.createElement("img")
//   let img9 = <HTMLImageElement>document.createElement("img")
//   let clickImageBooleanList: Array<boolean> = [];
//   let quizIndex = 0;
//   const quizLength = quiz.length; 
//   const $wrapperImage = document.querySelectorAll(".image");
//   const IMG_WIDTH = 200;
//   const IMG_HEIGHT = 200;
//   const TRUE_IMG_COUNT = 3;
//   const $questionText = <HTMLElement>document.getElementById('question-text')!;

//   const createImageTag = (createImage: any) => {
//     return new Promise((resolve) => {
//       resolve(createImage)
//     });
//   }
//   const displayImage = (imageSrc: Image, displayTime: number) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(imageSrc);
//       }, displayTime)
//     });
//   }
  
//   const loadingImage = (img: HTMLImageElement, src: any): Image => {
//     img.src = src.imgSrc
//     img.width = IMG_WIDTH;
//     img.height = IMG_HEIGHT;
//     img.classList.add('grid-item');
//     return {
//       img: img,
//       judge: src.judge
//     }
//   }
  
// // while分を使ってquizImageList[]に同じ数字が含まれていなければ繰り返す
//   // クイズの表示
//   const displayQuiz = async (): Promise<boolean[]> => {
//     $questionText.innerHTML = quiz[quizIndex].quizText;

//     const image1 = await displayImage(loadingImage(img1, quiz[quizIndex].quizImageList[randomNumberList[0]]), 100);
//     await createImageTag($wrapperImage[1].appendChild(img1));
//     const image2 = await displayImage(loadingImage(img2, quiz[quizIndex].quizImageList[randomNumberList[1]]), 100);
//     await createImageTag($wrapperImage[0].appendChild(img2));
//     const image3 = await displayImage(loadingImage(img3, quiz[quizIndex].quizImageList[randomNumberList[2]]), 100);
//     await createImageTag($wrapperImage[2].appendChild(img3));
//     const image4 = await displayImage(loadingImage(img4, quiz[quizIndex].quizImageList[randomNumberList[3]]), 100);
//     await createImageTag($wrapperImage[3].appendChild(img4));
//     const image5 = await displayImage(loadingImage(img5, quiz[quizIndex].quizImageList[randomNumberList[4]]), 100);
//     await createImageTag($wrapperImage[4].appendChild(img5));
//     const image6 = await displayImage(loadingImage(img6, quiz[quizIndex].quizImageList[randomNumberList[5]]), 100);
//     await createImageTag($wrapperImage[5].appendChild(img6));
//     const image7 = await displayImage(loadingImage(img7, quiz[quizIndex].quizImageList[randomNumberList[6]]), 100);
//     await createImageTag($wrapperImage[6].appendChild(img7));
//     const image8 = await displayImage(loadingImage(img8, quiz[quizIndex].quizImageList[randomNumberList[7]]), 100);
//     await createImageTag($wrapperImage[7].appendChild(img8));
//     const image9 = await displayImage(loadingImage(img9, quiz[quizIndex].quizImageList[randomNumberList[8]]), 100);
//     await createImageTag($wrapperImage[8].appendChild(img9));

//     return [
//       JSON.stringify(image1).includes('true'),
//       JSON.stringify(image2).includes('true'),
//       JSON.stringify(image3).includes('true'),
//       JSON.stringify(image4).includes('true'),
//       JSON.stringify(image5).includes('true'),
//       JSON.stringify(image6).includes('true'),
//       JSON.stringify(image7).includes('true'),
//       JSON.stringify(image8).includes('true'),
//       JSON.stringify(image9).includes('true'),
//     ]
//   }

//   const rodingImageSize = (img: HTMLImageElement, src: string): void => {
//     img.src = src
//     img.width = IMG_WIDTH;
//     img.height = IMG_HEIGHT;
//     img.classList.add('grid-item')
//   }
//   displayQuiz().then((imageBooleanList: Array<boolean>) => {
//       const displayImage = () => {
//         $wrapperImage.forEach(image => {
//           return new Promise<void> (() => {image.addEventListener('click', (e: Event) => {
//             image.classList.toggle('active');
//             clickImageBooleanLists(e, imageBooleanList)
//           })})
//         });
//       }
//       displayImage()
//       const clickImageBooleanLists = async (e: Event, imageBooleanList: Array<boolean>) => {
//         type ImageType = { img: HTMLImageElement }
//         const getImage = (image: ImageType) => {
//           switch(e.target) {
//             case img1:
//               clickImageBooleanList.push(imageBooleanList[0]);
//               break;
//             case img2:
//               clickImageBooleanList.push(imageBooleanList[1]);
//               break;
//             case img3:
//               clickImageBooleanList.push(imageBooleanList[2]);
//               break;
//             case img4:
//               clickImageBooleanList.push(imageBooleanList[3]);
//               break;
//             case img5:
//               clickImageBooleanList.push(imageBooleanList[4]);
//               break;
//             case img6:
//               clickImageBooleanList.push(imageBooleanList[5]);
//               break;
//             case img7:
//               clickImageBooleanList.push(imageBooleanList[6]);
//               break;
//             case img8:
//               clickImageBooleanList.push(imageBooleanList[7]);
//               break;
//             case img9:
//               clickImageBooleanList.push(imageBooleanList[8]);
//               return clickImageBooleanList;
//           }
//         };
//         getImage({img: img1});
//         return clickImageBooleanList;
//       }
//       // 「確認」ボタンを押したときのクリックアクション
//       button.addEventListener('click', (): void => {
//           const trueImageList: number = imageBooleanList.filter(trueImage => trueImage === true).length;
//           const clickTrueImageList: number = clickImageBooleanList.filter(trueImage => trueImage === true).length;

//           if (trueImageList > clickTrueImageList) {
//             window.alert('不正解です。ロック解除に失敗しました');
//           } else if (trueImageList === clickTrueImageList) {
//             window.alert('正解です。ロック解除に成功しました');
//           }
//           $wrapperImage.forEach((image) => {image.classList.remove('active')})
//           quizIndex++;
//           // 次の問題へ
//           if(quizIndex < quizLength) {
//             displayQuiz();
//           } else {
//             window.alert('終了！！');
//           }
//       });
//   });
// }