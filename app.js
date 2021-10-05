class wordPlay{
    constructor(dictionary) {
        this.words = dictionary;
    }

    randomSixLetterWord() {
        const sixLetterWords = [];
        for(let i = 0; i < this.words.size(); i++) {
            if(this.words[i].length == 6) {
                sixLetterWords.push(this.words[i]);
            }
        }
    }
}