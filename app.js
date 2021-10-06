class wordPlay{
    constructor(wordBank) {
        this.words = dictionary;
        this.sixLetterWords = [];
        this.subsetofWords = [];
    }

    // Takes in the English dictionary and picks a random 6 letter word for the user to guess
    randomSixLetterWord() {
        for(let i = 0; i < this.words.length; i++) {
            if(this.words[i].length == 6) {
                this.sixLetterWords.push(this.words[i]);
            }
        }
        const randomIndex = Math.floor(Math.random() * this.sixLetterWords.length);
        const randomWord = this.sixLetterWords[randomIndex];
        console.log(randomWord);
        return randomWord;
    }

    // Scrambles the root word and prints it to the console
    scrambleRootWord(word) {
        const wordArray = word.split("");
        const wordArrayLength = wordArray.length;
        
        for (let i = 0; i < wordArrayLength; i++) {
            const ranNum = Math.floor(Math.random() * wordArrayLength);

            let temp = wordArray[i];
            wordArray[i] = wordArray[ranNum];
            wordArray[ranNum] = temp;
        }
        //check to see if this is a valid method or choose another method
        word = wordArray.join("");
        console.log(word);
        return word;
    }

    // Creates an array of words that are 3-6 characters long
    subsetWords() {
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].length <= 6 && this.words[i].length >= 3) {
                this.subsetofWords.push(this.words[i]);
            }
        }
        console.log(this.subsetofWords);
    }
}

//creates an instance of wordPlay to test methods
const tester = new wordPlay();
tester.subsetWords();
//const word = tester.randomSixLetterWord();
//tester.scrambleRootWord(word);

// testing to see if console is working
//alert("word is not a valid English word (or too short/long)");
