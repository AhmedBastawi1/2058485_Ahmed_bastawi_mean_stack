import { Component, OnInit } from '@angular/core';
import { OnlineTestService } from '../online-test.service';
import { FormBuilder, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
  
})

export class OnlineTestComponent implements OnInit {
  myForm:FormGroup;
  questions: any = [];
  selectedAnswers:string[]=[];
  output:string = "";

  constructor(public testSer: OnlineTestService,public form:FormBuilder
    ) {     this.myForm = form.group({});
  }  

  ngOnInit() {
    this.testSer.git().subscribe(ques=> {
      for (let q of ques) {
        this.myForm.addControl(q.question, this.form.control(''));
        this.questions.push(q);
     }
   });
  }
  
  submit(){
    Object.keys(this.myForm.value).forEach((key)=> this.selectedAnswers.push(this.myForm.value[key]));
    let quizGrade:number = 0;
    for(let i = 0; i < this.questions.length; i++) {
      let x=this.questions[i].correctAns;
      if(this.questions[i].ans1==x){
        document.getElementById(this.questions[i].ans1)!.setAttribute('style', 'color:green');   
        document.getElementById(this.questions[i].ans1)!.append(" * Correct Answer");    }
      else if(this.questions[i].ans2==x){
        document.getElementById(this.questions[i].ans2)!.setAttribute('style', 'color:green');   
        document.getElementById(this.questions[i].ans2)!.append(" * Correct Answer");    }
      else if(this.questions[i].ans3==x){
        document.getElementById(this.questions[i].ans3)!.setAttribute('style', 'color:green');   
        document.getElementById(this.questions[i].ans3)!.append(" * Correct Answer");    }
        else if(this.questions[i].ans4==x){
          document.getElementById(this.questions[i].ans4)!.setAttribute('style', 'color:green');   
          document.getElementById(this.questions[i].ans4)!.append(" * Correct Answer"); }

      if(this.questions[i].correctAns == this.selectedAnswers[i]) {
        quizGrade++;
      } else {
        document.getElementById(this.questions[i].question)!.setAttribute('style', 'color:red');   
        let x=this.selectedAnswers[i];
        if(this.questions[i].ans1==x){
          document.getElementById(this.questions[i].ans1)!.setAttribute('style', 'color:red');   
          document.getElementById(this.questions[i].ans1)!.append(" * Selected Answer Is Wrong");    }
        else if(this.questions[i].ans2==x){
          document.getElementById(this.questions[i].ans2)!.setAttribute('style', 'color:red');   
          document.getElementById(this.questions[i].ans2)!.append(" * Selected Answer Is Wrong");   }
        else if(this.questions[i].ans3==x){
          document.getElementById(this.questions[i].ans3)!.setAttribute('style', 'color:red');   
          document.getElementById(this.questions[i].ans3)!.append(" * Selected Answer Is Wrong");   }
        else if(this.questions[i].ans4==x){
          document.getElementById(this.questions[i].ans4)!.setAttribute('style', 'color:red');   
          document.getElementById(this.questions[i].ans4)!.append(" * Selected Answer Is Wrong");   }
      }
    }
    this.output = "<h2>" + quizGrade + "/10 ";
    if(quizGrade < 7) {
      this.output += "Failed.</h2>" 
    } else {
      this.output += "Congratulations You Passed!</h2>"
    }
    this.myForm.disable()
  }
}


