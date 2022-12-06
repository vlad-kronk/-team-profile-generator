// require modules and node packages
const inq = require("inquirer");
const fs = require("fs");

const generateHTML = require("./lib/generateHTML");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// use can input an employee type or exit the app
const employeeTypeQuestion = [{
    type: "list",
    name: "employeeType",
    message: "Add an employee or exit:",
    choices: [
        "Manager",
        "Engineer",
        "Intern",
        "Exit application"
    ]
}];

// employee info questions that are identical across employee types
const employeeBaseInfoQuestions = [{
        type: "input",
        name: "name",
        message: "Name: "
    }, {
        type: "number",
        name: "id",
        message: "ID: "
    }, {
        type: "input",
        name: "email",
        message: "Email: "
    }
];

// question specific to managers
const managerQuestion = [{
    type: "number",
    name: "officeNumber",
    message: "Office number: "
}];

// question specific to engineers
const engineerQuestion = [{
    type: "input",
    name: "github",
    message: "Github username: "
}];

// question specific to interns
const internQuestion = [{
    type: "input",
    name: "school",
    message: "School: "
}];

// writes to the dist html file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}.html`, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// create prompt module and initialize array for employee objects
const prompt = inq.createPromptModule();
let employees = [];

// ask the user for the employee type and return the response
let getType = async () => {
    const answer = await prompt(employeeTypeQuestion);
    return answer.employeeType;
}

// concatenates array of base questions with the position-specific questions and returns the result
// if the user chose to exit, save the HTML into ./dist/index.html and exit the app
let appendQuestions = (type) => {
    let result;
    switch (type) {
        case "Manager":
            result = employeeBaseInfoQuestions.concat(managerQuestion);
            break;
        case "Engineer":
            result = employeeBaseInfoQuestions.concat(engineerQuestion);
            break;
        case "Intern":
            result = employeeBaseInfoQuestions.concat(internQuestion);
            break;
        case "Exit application":
            if (employees.length > 0) {
                console.log("Generating HTML...");
                writeToFile("index", generateHTML(employees));
            } else {
                console.log("No HTML generated.");
            }
            console.log("Exiting application...");
            process.exit(0);
    }
    // return the new questions array
    return result;
}

// ask the user for the employee info using the concatenated questions array
let getEmployeeInfo = async (questions) => {
    const answers = await prompt(questions);
    return answers;
}

// recursively builds the employees array until the user exits the application
let getEmployee = async () => {
    
    let employee = {
        "name": "",
        "type": "",
        "id": 0,
        "email": "",
    }

    // user inputs the type of employee
    const employeeType = await getType();
    employee.type = employeeType;

    // asks the user the new employee info questions based on employee type
    const employeeInfo = await getEmployeeInfo(appendQuestions(employeeType));

    // set employee key/value pairs to user's responses
    employee["name"] = employeeInfo.name;
    employee["id"] = employeeInfo.id;
    employee["email"] = employeeInfo.email;

    // creates a special key in the employee object depending on the employee type
    employee[Object.keys(employeeInfo)[3]] = Object.values(employeeInfo)[3];

    // add the employee object to the employees array
    employees.push(employee);

    // create a new employee!
    getEmployee();

}

getEmployee();