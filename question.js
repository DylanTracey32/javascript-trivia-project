export class Question {
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer
    }

    isAnswer(choice) {
        if (choice != this.choices[this.answer]) {
            return false;
        }
        return true;
    }

    getQuestion() {
        return this.question;
    }

    getChoices() {
        return this.choices;
    }
}