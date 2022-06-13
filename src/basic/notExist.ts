export default function notExistSample() {
  let name = null
  console.log("notExist sample 1:", typeof name, name)

  if (!name) {
    console.log("notExist sample 2:", "吾輩は猫である。名前はまだ"+name)
  } else {
    console.log("notExist sample 2:", "吾輩は猫である。名前は"+name)
  }

  let age = undefined
  console.log("notExist sample4:", typeof age, age)

}