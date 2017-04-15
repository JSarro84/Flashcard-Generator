
//this is my basic flashcard constructor
var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
}

//this is my cloze flashcard constructon
var ClozeCard = function(fullText, cloze, partial) {
	this.fullText = fullText;
	this.cloze = cloze; 
	this.partial = this.fullText.replace(cloze ,"...");
	};

//this is a basicCard instance
var firstPresident = new BasicCard(
    "Who was the first president of the United States?",
    "George Washington"
    );

//this is a ClozeCard instance
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", 
    "George Washington"
    );

//All code for this project was built to emulate the commands given in the homework.
//Due to having no front end, all code was run in a browser console.
//No need to write an error message function as when calling an unknown var error is automatically thrown.