export class Question {
    #selectedChoice = null;
    constructor(question, choices, answer) {
        this.question = question;
        this.choices = choices;
        this.answer = answer
    }

    getQuestion() {
        return this.question;
    }

    getChoices() {
        return this.choices;
    }

    get selectedChoice() {
        return this.#selectedChoice;
    }

    set selectedChoice(choice) {
        this.#selectedChoice = choice;
    }

    isAnswer(choice) {
        if (choice != this.choices[this.answer]) {
            return false;
        }
        return true;
    }
}