class wordPlay{
    constructor(wordBank) {
        this.words = dictionary;
        this.sixLetterWords = [];
    }

    randomSixLetterWord() {
        for(let i = 0; i < this.words.length; i++) {
            if(this.words[i].length == 6) {
                this.sixLetterWords.push(this.words[i]);
            }
        }
        const randomIndex = Math.floor(Math.random() * this.sixLetterWords.length);
        const randomWord = this.sixLetterWords[randomIndex];
        return randomWord;
    }

    //scrambleRootWord(word) {}
}

const tester = new wordPlay();
//console.log(tester.words);
tester.randomSixLetterWord();

// testing to see if console is working
//alert("word is not a valid English word (or too short/long)");
