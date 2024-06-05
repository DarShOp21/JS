let students = [
    {
        name : "darshan",
        marks : 80
    },
    {
        name : "sid",
        marks : 70
    },
    {
        name : "narendar",
        marks : 90
    },
]

let gpa = students.map((el) => (el.marks / 10));
console.log(`List of gpa of students : ${gpa}`)