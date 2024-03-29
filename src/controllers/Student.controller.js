const fs = require('fs');



const getStudent = async (req, res) => {
    const rawdata = fs.readFileSync('./studen.json', 'utf-8');
    const student = JSON.parse(rawdata);
    res.json(student);
}

const createStudent = async (req, res) => {
    const { name, age } = req.body;

    const rawdata = fs.readFileSync('./studen.json', 'utf-8');
    const student = JSON.parse(rawdata);
    student.push({ name, age });
    fs.writeFileSync('./studen.json', JSON.stringify(student, null, 2));

    res.json({
        message: "Student created successfully",
        data: {
            name,
            age
        }
    });
}

module.exports = {
    getStudent,
    createStudent
}