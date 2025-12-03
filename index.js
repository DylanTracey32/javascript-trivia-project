"use strict";
import { Question } from "./question.js";

const getElement = element => document.querySelector(element);
document.addEventListener("DOMContentLoaded", () => {
    // Grabbing important HTML elements
    
    // IMPORTANT INFO FOR DEVS!! 
    // Variable naming convention for question text: Q{insert question number}
    // Variable naming convention for possible choices: C{insert question number}{insert A-D}
    const Q1 = "How do you create a new \"p\" element in the DOM?";
    const C1A = "document.createNewElement(\"p\");";
    const C1B = "html.createElement(\"p\");";
    const C1C = "html.createNewElement(\"p\");";
    const C1D = "document.createElement(\"p\");";

    const Q2 = "How do you generate a random integer from 0 to 100?"
    const C2A = "random.randint(0, 100);";
    const C2B = "Math.randint(0, 100);";
    const C2C = "Math.floor(Math.random() * 100);";
    const C2D = "Math.ceil(Math.randomFloat() * 100);";

    const Q3 = "How do you grab the text from an element where the element is assigned to the variable \"element\"?";
    const C3A = "element.textContent;";
    const C3B = "element.innerText;";
    const C3C = "element.value;";
    const C3D = "getText(element);";

    const Q4 = "How do you loop through each value of an array named values?"
    const C4A = "for value in values {};";
    const C4B = "for (let values of value) {};";
    const C4C = "forEach (let value of values) {};";
    const C4D = "for (let value of values) {};";

    const Q5 = "How do you prevent default HTML validation of a form?";
    const C5A = "form.validate = false;";
    const C5B = "form.noValidate = true;";
    const C5C = "form.setCustomValidity = true;"
    const C5D = "form.customValidity = true;";

    const Q6 = "If using custom validation, how do you throw your own exception?";
    const C6A = "text = \"Error: (insert reason)\";throw new Error(text);";
    const C6B = "text = \"Error: (insert reason)\";form.noValidate = false;\bconsole.log(text);";
    const C6C = "text = \"Error: (insert reason)\";alert(text);";
    const C6D = "text = \"Error: (insert reason)\";error(text);";

    const Q7 = "How do you extend another class named Employee with the class Cashier?"
    const C7A = "class Cashier inherits Employee {};";
    const C7B = "subclass Cashier extends Employee ();";
    const C7C = "class Employee extends Cashier {};";
    const C7D = "class Cashier extends Employee {};";

    const Q8 = "What should a non-default import statement to import class Animal look like?";
    const C8A = "from \"./lib_example.js\" import Animal;";
    const C8B = "import Animal from \"./lib_example.js\";";
    const C8C = "import {Animal} from \"lib_example\";";
    const C8D = "import {Animal} from \"./lib_example.js\";";

    const Q9 = "Which should setting up a route for a POST request look like?";
    const C9A = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   response.json(name);\n"+
                "});";
    const C9B = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = response.body.name;\n"+
                "   names.push(name);\n"+
                "   request.json(name);\n"+
                "});";
    const C9C = "app.post(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   json.stringify(name);\n"+
                "});";
    const C9D = "app.fetch(\"/names\", (request, response) => {\n"+
                "   const name = request.body.name;\n"+
                "   names.push(name);\n"+
                "   json.parse(name);\n"+
                "});";

    const Q10 = "For a class, how do you set property subtotal as private?";
    const C10A = "private subtotal = null;";
    const C10B = "subtotal.private = null;";
    const C10C = "#subtotal = null;";
    const C10D = "@subtotal = null;";

    const Q11 = "What's the correct way to trigger an event when an element is clicked?";
    const C11A = "element.addEventListener(\"mouseover\", () => {});";
    const C11B = "element.addEventListener(\"click\", () => {});";
    const C11C = "element.addEventListener(\"onclick\", () => {});";
    const C11D = "element.addEventListener(\"mouseclick\", () => {});";

    const Q12 = "How do you use the array method reduce() to get the sum of array numbers?";
    const C12A = "const sum = numbers.reduce(elem => elem + elem, numbers.length);";
    const C12B = "const sum = numbers.reduce({total, elem} => elem += elem, total);";
    const C12C = "const sum = numbers.reduce(elem => elem += elem, 0);";
    const C12D = "const sum = numbers.reduce({total, elem} => total + elem, 0);";

    const Q13 = "What is a good definition of a callback function?";
    const C13A = "A function that returns itself";
    const C13B = "A function that is passed as an argument to another function";
    const C13C = "A function that returns the argument but modified";
    const C13D = "A function";

    const Q14 = "How do you correctly code a ternary operator?";
    const C14A = "let example = if (condition) ? [insert value if true]:[insert value if false];";
    const C14B = "let example = (condition) => [insert value if true]:[insert value if false];";
    const C14C = "let example = (condition) ? [insert value if true]:[insert value if false];";
    const C14D = "let example = if (condition) => [insert value if true]:[insert value if false];";

    const Q15 = "What error (if any) would this line of code give you: document.querySelectorAll(\"body\").filter(element => element > 30);";
    const C15A = "ReferenceError";
    const C15B = "RangeError";
    const C15C = "SyntaxError";
    const C15D = "TypeError";
    
    //consolidate possible answers for each question into arrays
    const Q1choices = [C1A, C1B, C1C, C1D];
    const Q2choices = [C2A, C2B, C2C, C2D];
    const Q3choices = [C3A, C3B, C3C, C3D];
    const Q4choices = [C4A, C4B, C4C, C4D];
    const Q5choices = [C5A, C5B, C5C, C5D];
    const Q6choices = [C6A, C6B, C6C, C6D];
    const Q7choices = [C7A, C7B, C7C, C7D];
    const Q8choices = [C8A, C8B, C8C, C8D];
    const Q9choices = [C9A, C9B, C9C, C9D];
    const Q10choices = [C10A, C10B, C10C, C10D];
    const Q11choices = [C11A, C11B, C11C, C11D];
    const Q12choices = [C12A, C12B, C12C, C12D];
    const Q13choices = [C13A, C13B, C13C, C13D];
    const Q14choices = [C14A, C14B, C14C, C14D];
    const Q15choices = [C15A, C15B, C15C, C15D];

    // Create question objects (integer parameter is the index of the correct choice)
    const question1 = new Question(Q1, Q1choices, 3);
    const question2 = new Question(Q2, Q2choices, 2);
    const question3 = new Question(Q3, Q3choices, 0);
    const question4 = new Question(Q4, Q4choices, 3);
    const question5 = new Question(Q5, Q5choices, 1);
    const question6 = new Question(Q6, Q6choices, 0);
    const question7 = new Question(Q7, Q7choices, 2);
    const question8 = new Question(Q8, Q8choices, 3);
    const question9 = new Question(Q9, Q9choices, 0);
    const question10 = new Question(Q10, Q10choices, 2);
    const question11 = new Question(Q11, Q11choices, 1);
    const question12 = new Question(Q12, Q12choices, 3);
    const question13 = new Question(Q13, Q13choices, 1);
    const question14 = new Question(Q14, Q14choices, 2);
    const question15 = new Question(Q15, Q15choices, 3);

    //Consolidate questions into array
    let unusedQuestions = [
        question1,
        question2,
        question3,
        question4,
        question5,
        question6,
        question7,
        question8,
        question9,
        question10,
        question11,
        question12,
        question13,
        question14,
        question15
    ]

    let randomQuestion = Math.floor(Math.random() * unusedQuestions.length);

    let selectedQuestionObj = unusedQuestions[randomQuestion];

    let selectedQuestion = selectedQuestionObj.getQuestion();

    let selectedChoicesArray = selectedQuestionObj.getChoices();

    // Make question text
    const questionPElem = document.createElement("p");
    questionPElem.textContent = selectedQuestion;
    getElement("#question").appendChild(questionPElem);

    for (let i = 0; i < selectedChoicesArray.length; i++) {
        
        //make input element
        const inputElem = document.createElement("input");
        inputElem.type = "radio";
        inputElem.id = `choice${i}`;
        inputElem.name = "choices";
        inputElem.value = i;
        
        
        //make label element
        const labelElem = document.createElement("label");
        labelElem.for = `choice${i}`;
        labelElem.textContent = selectedChoicesArray[i];

        //make break element
        const breakElem = document.createElement("br");

        getElement("#question").appendChild(inputElem);
        getElement("#question").appendChild(labelElem);
        getElement("#question").appendChild(breakElem);
    };
})