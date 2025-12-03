"use strict";
import { Question } from "./question.js";

const getElement = element => document.querySelector(element);
document.addEventListener("DOMContentLoaded", () => {
    // Grabbing important HTML elements
    
    // IMPORTANT INFO FOR DEVS!! 
    // Variable naming convention for question text: Q{insert question number}
    // Variable naming convention for possible answers: A{insert question number}{insert A-D}
    const Q1 = "How do you create a new \"p\" element in the DOM?";
    const A1A = "document.createNewElement(\"p\");";
    const A1B = "html.createElement(\"p\");";
    const A1C = "html.createNewElement(\"p\");";
    const A1D = "document.createElement(\"p\");";

    const Q2 = "How do you generate a random integer from 0 to 100?"
    const A2A = "random.randint(0, 100);";
    const A2B = "Math.randint(0, 100);";
    const A2C = "Math.floor(Math.random() * 100);";
    const A2D = "Math.ceil(Math.randomFloat() * 100);";

    const Q3 = "How do you grab the text from an element where the element is assigned to the variable \"element\"?";
    const A3A = "element.textContent;";
    const A3B = "element.innerText;";
    const A3C = "element.value;";
    const A3D = "getText(element);";

    const Q4 = "How do you loop through each value of an array named values?"
    const A4A = "for value in values {};";
    const A4B = "for (let values of value) {};";
    const A4C = "forEach (let value of values) {};";
    const A4D = "for (let value of values) {};";

    const Q5 = "How do you prevent default HTML validation of a form?";
    const A5A = "form.validate = false;";
    const A5B = "form.noValidate = true;";
    const A5C = "form.setCustomValidity = true;"
    const A5D = "form.customValidity = true;";

    const Q6 = "If using custom validation, how do you throw your own exception?";
    const A6A = "text = \"Error: (insert reason)\"\bthrow new Error(text)";
    const A6B = "text = \"Error: (insert reason)\"\bform.noValidate = false;\bconsole.log(text);";
    const A6C = "text = \"Error: (insert reason)\"\balert(text);";
    const A6D = "text = \"Error: (insert reason)\"\berror(text);";

    const Q7 = "How do you extend another class named Employee with the class Cashier?"
    const A7A = "class Cashier inherits Employee {};";
    const A7B = "subclass Cashier extends Employee ();";
    const A7C = "class Employee extends Cashier {};";
    const A7D = "class Cashier extends Employee {};";

    const Q8 = "What should a non-default import statement to import class Animal look like?";
    const A8A = "from \"./lib_example.js\" import Animal;";
    const A8B = "import Animal from \"./lib_example.js\";";
    const A8C = "import {Animal} from \"lib_example\";";
    const A8D = "import {Animal} from \"./lib_example.js\";";

    const Q9 = "Which should setting up a route for a POST request look like?";
    const A9A = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   response.json(name);\n"+
                "});";
    const A9B = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = response.body.name;\n"+
                "   names.push(name);\n"+
                "   request.json(name);\n"+
                "});";
    const A9C = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   json.stringify(name);\n"+
                "});";
    const A9D = "app.fetch(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   json.parse(name);\n"+
                "});";

    const Q10 = "For a class, how do you set property subtotal as private?";
    const A10A = "private subtotal = null;";
    const A10B = "subtotal.private = null;";
    const A10C = "#subtotal = null;";
    const A10D = "@subtotal = null;";

    const Q11 = "What's the correct way to trigger an event when an element is clicked?";
    const A11A = "element.addEventListener(\"mouseover\", () => {});";
    const A11B = "element.addEventListener(\"click\", () => {});";
    const A11C = "element.addEventListener(\"onclick\", () => {});";
    const A11D = "element.addEventListener(\"mouseclick\", () => {});";

    const Q12 = "How do you use the array method reduce() to get the sum of array numbers?";
    const A12A = "const sum = numbers.reduce(elem => elem + elem, numbers.length);";
    const A12B = "const sum = numbers.reduce({total, elem} => elem += elem, total);";
    const A12C = "const sum = numbers.reduce(elem => elem += elem, 0);";
    const A12D = "const sum = numbers.reduce({total, elem} => total + elem, 0);";

    const Q13 = "What is a good defintion of a callback function?";
    const A13A = "A function that returns itself";
    const A13B = "A function that is passed as an argument to another function";
    const A13C = "A function that returns the argument but modified";
    const A13D = "A function";

    const Q1choices = [A1A, A1B, A1C, A1D];

    const question1 = new Question(Q1, Q1choices, 3);


    
})