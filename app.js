/**
 * Creates a wordPlay game and instantiates field variables
 */
class wordPlay{
    constructor(wordBank) {
        this.words = dictionary;
        this.sixLetterWords = [];
        this.sixLetterWord = "";
        this.subsetofWords = [];
        this.subset = [];
        this.guessedWords = [];
    }

    /**
     * Takes in the English dictionary and picks a random 6 letter word for the user to guess
     * @returns the random word chosen
     */
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

    /**
     * Scrambles the root word and returns it to the console
     * @param {*} word takes in the random six letter word that was already chosen
     * @returns the scrambled word
     */
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
        return word;
    }

    /**
     * Creates an array of words that are 3-6 characters long. Takes that array and creates a subset of words only containing
     * characters in the root word
     */
    subsetWords() {
        // creates subset of words
        for (let i = 0; i < this.words.length; i++) {
            if (this.words[i].length <= 6 && this.words[i].length >= 3) {
                this.subsetofWords.push(this.words[i]);
            }
        }
        // creates an object literal that stores letter counts for the root word
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
        // creates an object literal to store letter counts of each word in the subsetofWords
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
            // traverses through each word and checks that their letter counts match the root word counts and then adds them
            // to the subset of words
            let found = true;
            for(let key in wordtoCheck){
                if (wordtoCheck[key] > rootWordCounts[key] || !(rootWordCounts.hasOwnProperty(key))) {
                    found = false;
                }
            }
            if(found == true) {
                this.subset.push(currentWord);
            }
        }
        console.log(this.subset);
    }
    
    /**
     * Prints the words that the user must guess from the subset of words array in a hidden manner
     */
    
    printWordstoGuess() {
        for(let i = 0; i < this.subset.length; i++) {
            let pattern = "";
            let current = this.subset[i];
            if (!(this.guessedWords.indexOf(i) > -1)) {
                for(let j = 0; j < current.length; j++) {
                    pattern += "_ ";
                }
            }
            else if (this.guessedWords.indexOf(i) > -1) {
                for(let x = 0; x < current.length; x++) {
                    pattern += current[x];
                }
            }
            console.log(pattern);
        }
    }
}

//creates an instance of wordPlay to test methods and playes the game
const tester = new wordPlay();
const w = tester.randomSixLetterWord();
let scrambledWord = tester.scrambleRootWord(w);
console.log(scrambledWord);
tester.subsetWords();
var guess = null;
do {
    console.log("Letters available: " + scrambledWord);
    tester.printWordstoGuess();
    guess = prompt("Enter your guess: ");
    if (guess == "*") {
        let newScrambled = tester.scrambleRootWord(scrambledWord);
        scrambledWord = newScrambled;
        console.log("Your word is being scrambled...");
        console.log(scrambledWord);
        console.clear();

    }
    else if (guess.length < 3 && guess.length >= 0) {
        alert(guess + " is not a valid English word. Your guess is too short ");
        console.clear();
    }
    else if (guess.length > 6) {
        alert(guess + " is not a valid English word. Your guess is too long ");
        console.clear();
    }
    else if (tester.subset.indexOf(guess) > -1) {
        alert("Correct!");
        tester.guessedWords.push(guess); 
        if (tester.subset.length == tester.guessedWords.length) {
            alert("Congratulations! You have guessed all the words!");
            guess = null;
        } 
        console.clear();
    }
    else if (!(tester.subset.indexOf(guess) > -1)) {
        alert(guess + " is not a word!");
        console.clear();
    }
} while (guess != null);

console.log("You guessed " + tester.guessedWords.length + " out of " + tester.subset.length);
for (let i = 0; i < tester.subset.length; i++) {
    console.log(tester.subset[i]);
}