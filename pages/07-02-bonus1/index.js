const classmates = [
  { name: "철수", age: 10, school: "토끼초등학교" },
  { name: "영희", age: 13, school: "다람쥐초등학교" },
  { name: "훈이", age: 11, school: "토끼초등학교" }
]


classmates.filter((el)=>{ return el.school === "다람쥐초등학교" }).map((el) => ({ name: el.name + "어린이", age: el.age, school: el.school}))



// classmates.filter((el) => { 
//   return el.school ===  "토끼초등학교"}).map((el) => ({name: el.name, age: el.age, school: el.school, candy: 10}))