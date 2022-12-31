import { userData } from "./type";
import { fetchUser } from "./type";

export default function gitHub() {
  const inputText = document.getElementById("userId") as HTMLInputElement;
  const button = document.getElementById("button") as HTMLButtonElement;
  // async関数をここで指定
  const main = async() => {
    try {
      const UserInfo = await fetchUserData(getUserId());
      console.log(UserInfo)
    } catch (error) {
      console.log(`エラーが発生しました。 (#{error})`);
    }
  }

  const fetchUserData = (userId: string): Promise<userData> => {
    // 全てのリポジトリ情報を取得できる
    // const res = await fetch("https://api.github.com/users/takuya178/repos");
    return fetch(`https://api.github.com/users/${userId}`)
      .then((response: Response) => {
        if (!response.ok) {
          return Promise.reject(new Error(`${response.status}:`))
        } else {
          return response.json()
        }
      })
  }

  const getUserId = (): string => {
    const value = inputText.value
    return value
  }

  button.addEventListener('click', () => {
    main();
  })
}