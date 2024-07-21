// const main = async () => {
//     let students = await fetch("http://localhost:3000/api/get_student_data").then(response => response.json()).then((data) => { return data });
//     let marks = await fetch("http://localhost:3000/api/get_mark_data").then(response => response.json()).then((data) => { return data });
//     let subjects = await fetch("http://localhost:3000/api/get_subject_data").then(response => response.json()).then((data) => { return data });
//     const stu = new Map();
//     const sub = new Map()
//     for (let i = 0; i < students.length; i++) {
//         stu.set(students[i].student_id, students[i])
//     }
//     for (let i = 0; i < subjects.length; i++) {
//         sub.set(subjects[i].subject_id, subjects[i])
//     }
//     let arr = []
//     for (let i = 0; i < marks.length; i++) {
//         arr.push({
//             students_name: stu.get(marks[i].student_id).name,
//             subject_name: sub.get(marks[i].subject_id).subject_name,
//             mark: marks[i]
//         })
//     }
//     // console.log(arr);

//     function findByMarkId  (student_id , subject_id){
//         return marks.find((e) => {return e.student_id == student_id && e.subject_id == subject_id})
//     }

//     for(let i = 0 ; i < marks.length ; i++){
// console.log(findByMarkId(marks[i].student_id , marks[i].subject_id));
//     }


// }
// main()
