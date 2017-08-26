
var gameobject = {
    words: {SCHOLES:{
                pic:"assets/images/Paul-Scholes.jpg",
                vid:"https://www.youtube.com/embed/cwjvzohZr8A?autoplay=1",

    },
            GIGGS:{
                pic:"assets/images/giggs.jpg",
                vid:"https://www.youtube.com/embed/9ZcJnWVKDks?autoplay=1",

    },
        BECKHAM:{
                pic:"assets/images/beckham.jpg",
                vid:"https://www.youtube.com/embed/UlJVm-kEV5o?autoplay=1",


    },
        ROONEY: {
                pic:"assets/images/rooney.jpg",
                vid:"https://www.youtube.com/embed/zaexgl_GpPA?autoplay=1",

    },
        FERDINAND: {
                pic:"assets/images/ferdinand.jpg",
                vid:"https://www.youtube.com/embed/uFJW5fKg3es?autoplay=1",

    },
        GERRARD: {
                pic:"assets/images/steven-gerrard-slip.jpg",
                vid:"https://www.youtube.com/embed/WBGfh1irTCM?autoplay=1",

    }},

    wins: 0,
    currentword: null,
    letterguessed: null,
    wordletters: [],
    lettersmatched: [],
    remaingguesses: 12,
    guessedletters: [],

    gamestart: function () {
        var wordkeys = Object.keys(this.words);
        this.currentword = wordkeys[Math.floor(Math.random() * wordkeys.length)];
        this.wordletters = this.currentword.split("");
        this.showingword();

        console.log(this.wordletters);
    },

    gameplay: function (letter) {
        if(this.remaingguesses === 0){
            this.restartGame();
        }
        else {

            this.gusseslist(letter);


            this.matchedlist(letter);


            this.showingword();


            if (this.addwins() === true) {
                this.restartGame();
            }
        }
    },

    gusseslist: function(letter){
        if(this.wordletters.indexOf(letter)=== -1 && this.guessedletters.indexOf(letter)=== -1 ){
            this.guessedletters += letter;
            this.remaingguesses--;
        }

        document.querySelector("#remainingguess").innerHTML = this.remaingguesses;
        document.querySelector("#alreadyguessed").innerHTML = this.guessedletters;

    },

    matchedlist: function(letter){
        for (var i = 0; i < this.wordletters.length; i++) {
            if ((letter === this.wordletters[i]) && this.lettersmatched.indexOf(letter) === -1) {

                this.lettersmatched += letter;


            }
        }
    },

    addwins: function() {
        var win;
        if (this.lettersmatched.length === 0) {
            win = false;
        }
        else {
            win = true;
        }

        for (var i = 0; i < this.wordletters.length; i++) {
            if (this.lettersmatched.indexOf(this.wordletters[i]) === -1) {
                win = false;
            }
        }

        /*if(this.lettersmatched.length === this.wordletters.length){
            win = true;

        }*/

        if (win) {


            this.wins = this.wins + 1;


            document.querySelector("#wins").innerHTML = this.wins;
            document.querySelector("#video").src = this.words[this.currentword].vid;
            document.querySelector("#picture").src = this.words[this.currentword].pic;
            console.log(video);
            return true;

        }
        return false;
    },



    restartGame:function () {
        this.currentword = null;
        this.letterguessed = null;
        this.wordletters = [];
        this.lettersmatched = [];
        this.remaingguesses = 12;
        this.guessedletters= [];
        this.gamestart();
        this.showingword();
        document.querySelector("#alreadyguessed").innerHTML = this.guessedletters;
        document.querySelector("#remainingguess").innerHTML = this.remaingguesses;
    },


    showingword: function() {
        var wordview = "";
        for (var i = 0; i < this.wordletters.length; i++) {
            if (this.lettersmatched.indexOf(this.wordletters[i]) !==-1) {
                wordview += this.wordletters[i];
            }
            else {
                wordview += "&nbsp;_&nbsp;";
            }
            //console.log(wordview);
            document.querySelector("#currentword").innerHTML = wordview;

        }
    }



}
gameobject.gamestart();


document.onkeyup = function(event) {

    gameobject.letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();

    gameobject.gameplay(gameobject.letterGuessed);
    //console.log(event);
};
