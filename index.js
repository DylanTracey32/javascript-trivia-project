"use strict";
import { Question } from "./question.js";

const getElement = element => document.querySelector(element);
document.addEventListener("DOMContentLoaded", () => {
    // Grabbing important HTML elements
    
    
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



    const Q1choices = [A1A, A1B, A1C, A1D];

    const question1 = new Question(Q1, Q1choices, 3);


    
})