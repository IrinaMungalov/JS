// uni dimensional Array
// ---------------------------- > dimension 0: days
let grades_1 = [9, 10, 9, 8, 10]
let grades_2 = [8, 8, 8, 8, 8]


// bi dimensional Array
let grades_ = [
    [                         // | dimension 0: groups
        [9, 10, 9, 8, 10],    // |
        [8,  8, 8, 8,  8]     // |   | dimension 1: students
    ],                        // |   |
    [                         // |   |
        [7, 10, 9, 8, 10],    // |   V
        [8,  7, 5, 8,  8],    // |
        [8,  8, 5, 8,  8]     // |
    ]                         // |
]                             // V


//HW1:

let grades1 = [];

for ( let group_index = 0; group_index < 2; group_index++ ) { // group
    let group = [];
    
    for (let student_index = 0; student_index < 3; student_index++) { // student
        let student_grades = [];
        
        for (let grade_index = 0; grade_index < 5; grade_index++) { // grade
            let grade = prompt( `Enter grades ${grade_index + 1} for student ${student_index + 1} in group ${group_index + 1}: ` );
            student_grades.push( parseInt(grade) );
        }
        
        group.push(student_grades);
    }
    
    grades1.push(group);
}

console.log( grades1 );




// ---------------------------- > dimension 2: lessons

let group_index = +prompt("Choose group index(1,1): ")
let student_index = +prompt("Choose student index: ")

for (let i=0; i<5; i++) {
    console.log( grades_[group_index][student_index][i])
}



//HW2:

let matrix = [
    [-1,  2,  1],
    [ 1, -2,  1],
    [-1, -2, -1]
]







// ---------------------------- > dimension 1: lessons

// bi dimensional Array
let grades = [        // | index
    [9, 10, 9, 8, 10],  // | 0
    [8,  7, 8, 8,  8]   // | 1
]                       // V
//   0   1  2  3   4
// ---------------------------- > dimension 1: lessons
