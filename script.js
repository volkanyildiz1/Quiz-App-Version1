class Question{
    constructor(text,choises,answer){
     this.text=text;
     this.choises=choises;
     this.answer=answer;
    }
}
Question.prototype.checkAnswer=function(answer){
    return this.answer==answer;
}
class Quiz{
    constructor(questions){
        this.questions=questions;
        this.score=0;
        this.questionIndex=0;
    } 
}
Quiz.prototype.getQuestion=function() {
    return this.questions[this.questionIndex];
};
Quiz.prototype.isFinish=function(){
    return this.questions.length==this.questionIndex;
};
Quiz.prototype.guess=function(answer){
    let question=this.getQuestion();
    if (question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
};
//örnek sorular hazırlayalım
let q1=new Question("Where is Berlin?",["Germany","France","Italy","England"],"Germany");
let q2=new Question("Where is Paris?",["Germany","France","Italy","England"],"France");
let q3=new Question("Where is London?",["Germany","France","Italy","England"],"England");
let q4=new Question("Where is Rome?",["Germany","France","Italy","England"],"Italy");
let question_Array=[q1,q2,q3,q4];
//quiz nesnesi oluşturulaım
let quiz=new Quiz(question_Array);
startQuiz();
function startQuiz(){
    let allBtn=document.querySelectorAll(".button");
    let question=quiz.getQuestion();
   // let choises=question.choises;
    if(quiz.isFinish()){
       document.getElementById("score_p").innerHTML="Score : "+quiz.score;
    }else{
     document.getElementById("soru_p").innerText=question.text;
     for(let i=0;i<question.choises.length;i++){
         document.querySelector("#sk"+i).textContent=question.choises[i];
     }
     allBtn.forEach(element => {
        element.onclick=function(){
           quiz.guess(element.textContent);
           for(let i=0;i<question.choises.length;i++){
            document.querySelector("#sk"+i).textContent==question.choises[i];}   
        startQuiz();
          }
    });
    }
}
