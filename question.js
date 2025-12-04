export class Question {
    #choice = null;
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

    get choice() {
        return this.#choice;
    }

    set choice(choice) {
        this.#choice = choice;
    }
}