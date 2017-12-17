/*
    1. Using destructuring please save job details from employee in a new variable called jobDetails
    2. Rewrite showEmployeeDetails function using destructuring
    ( If you wish you can rewrite it using arrow functions )
*/

var employee = {
    name: "Daniel",
    age: 32,
    job: {
        position: "Software Developer",
        company: "Software Inc.",
        salary: "confidential"
    }
}

function showEmployeeDetails( employee ) {
    console.log( "Name ", employee.name );
    console.log( "Age: ", employee.age );
    console.log( "Company: ", employee.job.company );
    console.log( "Position: ", employee.job.position );
}