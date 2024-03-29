const { getStudent, createStudent } = require("./controllers/Student.controller");

const auth = (req, res, next) => {
    console.log("Auth Middleware 1");
    next();
}

const roleBaseAccess = (req, res, next) => {
    console.log("Role Middleware 1");
    next();
}



module.exports = [
    {
        path: '/api/student',
        method: 'get',
        middleware: [auth],
        action: getStudent,
    },
    {
        path: '/api/student',
        method: 'post',
        middleware: [auth, roleBaseAccess],
        action: createStudent,
    }
];
