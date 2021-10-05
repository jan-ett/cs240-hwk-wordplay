class wordPlay{
    constructor(dictionary) {
        this.words = this.dictionary;
        this.sixLetterWords = [];
    }

    randomSixLetterWord() {
        for(let i = 0; i < this.words.size(); i++) {
            if(this.words[i].length == 6) {
                this.sixLetterWords.push(this.words[i]);
            }
        }
        const randomIndex = Math.floor(Math.random() * this.sixLetterWords.length);
        const randomWord = this.sixLetterWords[randomIndex];
        console.log(randomWord);
    }
}
