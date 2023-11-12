let grades = [ 0, 0, 0 ]

//HW:

grades[0] = Number( prompt("Введите оценку №1:") )
grades[1] = Number( prompt("Введите оценку №2:") )
grades[2] = Number( prompt("Введите оценку №3:") )

let avg_grade = (grades[0] +  grades[1] +  grades[2]) / 3

console.log(`average grade = ${avg_grade.toFixed(2)}`)