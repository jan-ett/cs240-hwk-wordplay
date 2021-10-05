class wordPlay{
    constructor(dictionary) {
        this.words = dictionary;
    }

    randomSixLetterWord() {
        const sixLetterWords = [];
        for(let i = 0; i < this.words.size(); i++) {
            if(this.words.get(i) == 6) {
                sixLetterWords.add(this.words.get(i));
            }
        }
    }
}