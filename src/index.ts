// import { v4 as uuidV4 } from "uuid";

// console.log(uuidV4())


const list = document.querySelector<HTMLUListElement>("#list")
const from = document.getElementById("#new-task-from")as HTMLFormElement |null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

 from?.addEventListener("sumit",e => {
  e.preventDefault()

  if(input?.value == "" || input?.value ==null) return

  input.value
 })