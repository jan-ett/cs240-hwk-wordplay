class wordPlay{
    constructor(wordBank) {
        this.words = dictionary;
        this.sixLetterWords = [];
        this.sixLetterWord = "";
        this.subsetofWords = [];
        this.subset = [];
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
        this.sixLetterWord = randomWord;
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
        word = wordArray.join("");
        console.log("Letters available: " + word);
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

        const rootWordCounts = {};
        for (let i = 0; i < this.sixLetterWord.length; i++) {
            if(rootWordCounts[this.sixLetterWord[i]]) {
                rootWordCounts[this.sixLetterWord[i]] = rootWordCounts[this.sixLetterWord[i]] + 1;
            }
            else {
                rootWordCounts[this.sixLetterWord[i]] = 1;
            }
        }
        console.log(rootWordCounts);

        for (let i = 0; i < this.subsetofWords.length; i++) {
            const currentWord = this.subsetofWords[i];
            const wordtoCheck = {};
            for(let j = 0; j < currentWord.length; j++) {
                if(wordtoCheck[currentWord[j]]) {
                    wordtoCheck[currentWord[j]] = wordtoCheck[currentWord[j]] + 1;
                }
                else {
                    wordtoCheck[currentWord[j]] = 1;
                }
            }

            let found = true;
            for(let key in wordtoCheck){
                if (wordtoCheck[key] > rootWordCounts[key] || !(rootWordCounts.hasOwnProperty(key))) {
                    found = false;
                }
            }
            if(found == true) {
                this.subset.push(currentWord);
            }
            
            //console.log(wordtoCheck);
            
        }

        // for (let key in wordtoCheck) {
        //     for (let key2 in rootWordCounts) {
        //         if (wordtoCheck[key] <= rootWordCounts[key2]) {
        //             this.subset.push(this.subsetofWords[i]);
        //         }
        //     }
        // }
        console.log(this.subset);
    }
    
    // Prints the words that the user must guess from the subset of words array
    printWordstoGuess() {
        for(let i = 0; i < this.subset.length; i++) {
            let pattern = "";
            for(let j = 0; j < this.subset[i].length; j++) {
                pattern += "_ ";
            }
            console.log(pattern);
        }
    }

    userInteraction() {
        let input = prompt("Enter your guess:");
    }
}

//creates an instance of wordPlay to test methods
const tester = new wordPlay();
const w = tester.randomSixLetterWord();
tester.scrambleRootWord(w);
tester.subsetWords();
//tester.userInteraction();
tester.printWordstoGuess();
