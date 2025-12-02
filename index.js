"use strict";
import { Question } from "./question.js";

const getElement = element => document.querySelector(element);
document.addEventListener("DOMContentLoaded", () => {
    // Variable naming convention for question text: Q{insert question number}
    // Variable naming convention for possible answers: A{insert question number}{insert A-D}
    const Q1 = "How do you create a new p element in the DOM?";
    const A1A = "document.createNewElement(\"p\")";
    const A1B = "html.createElement(\"p\")";
    const A1C = "html.createNewElement(\"p\")";
    const A1D = "document.createElement(\"p\")";

    const choices = [A1A, A1B, A1C, A1D];

    const question1 = new Question(Q1, choices, 3);

    console.log(question1.isAnswer(A1D));
})