const fs = require("fs");

let generateManager = (name, id, email, officeNumber) => {
    let result = `<div class="d-flex m-3">
    <img
        src="https://via.placeholder.com/200"
        class="figure-img img-fluid figure-rounded"
    />
    <div class="mx-4">
        <h3>${name}</h3>
        <p>Manager</p>
        <p>Employee ID: ${id}</p>
        <p>
            Email:
            <a href="mailto:${email}"
                >${email}</a
            >
        </p>
        <p>Office: ${officeNumber}</p>
    </div>
</div>`;

    return result; 
}

let generateEngineer = (name, id, email, github) => {
    let result = `<div class="d-flex m-3">
    <img
        src="https://via.placeholder.com/200"
        class="figure-img img-fluid figure-rounded"
    />
    <div class="mx-4">
        <h3>${name}</h3>
        <p>Engineer</p>
        <p>Employee ID: ${id}</p>
        <p>
            Email:
            <a href="mailto:${email}"
                >${email}</a
            >
        </p>
        <p>
            Github:
            <a href="https://github.com/${github}" target="_blank"
                >github.com/${github}</a
            >
        </p>
    </div>
</div>`;

    return result;
}

let generateIntern = (name, id, email, school) => {
    let result = `<div class="d-flex m-3">
    <img
        src="https://via.placeholder.com/200"
        class="figure-img img-fluid figure-rounded"
    />
    <div class="mx-4 line-height">
        <h3>${name}</h3>
        <p>Intern</p>
        <p>Employee ID: ${id}</p>
        <p>
            Email:
            <a href="mailto:${email}"
                >${email}</a
            >
        </p>
        <p>School: ${school}</p>
    </div>
</div>`;

    return result;
}

let generate = (employees) => {
    let head = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Meet the Team</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
        />
    </head>
    <body class="bg-light">
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mx-3 mb-0 h1">Company</span>
        </nav>
        <header>
            <h1 class="w-75 text-center display-1 mx-auto my-5">
                Meet our team!
            </h1>
        </header>
        <section class="d-flex flex-column w-75 mx-auto">`

    let foot = `</section>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossorigin="anonymous"
        ></script>
    </body>
</html>`;

    let list = ``;

    employees.forEach(employee => {
        // generate different card based on employee type
        switch (employee.type) {
            // managers have an office number
            case "Manager":
                list = `${list}
                ${generateManager(employee.name, employee.id, employee.email, employee.officeNumber)}`;
                break;
            
            // engineers have a github link
            case "Engineer":
                list = `${list}
                ${generateEngineer(employee.name, employee.id, employee.email, employee.github)}`;
                break;

            // interns have a school
            case "Intern":
                list = `${list}
                ${generateIntern(employee.name, employee.id, employee.email, employee.school)}`;
                break;
        }
    }) 

    // combine the cards with the base html
    let result = `${head}
    ${list}
    ${foot}`;

    return result;
}

module.exports = generate;