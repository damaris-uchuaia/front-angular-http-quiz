
import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Question } from './models/question.model';
import { WebApiService } from './services/web-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('input') input!: ElementRef

  imageSrc: string = '/src/assets/relogio (1).png'

  questionsList: Question[] = []
  question!: Question
  title!: string
  body!: string
  answer: string = ''
  answerQuestionId!: number

  constructor(private webApiService: WebApiService) {}

  ngOnInit() {
    this.getAllQuestions()
  }

  getAllQuestions() {
    this.webApiService.getQuestions().subscribe(questions => {
      this.questionsList = questions
    })
  }

  getQuestion(id: any) {
    this.webApiService.getQuestionById(parseInt(id)).subscribe(question => {
      this.question = question
    })
  }

  saveQuestion() {
    this.webApiService.createQuestion({ body: this.body, title: this.title }).subscribe(value => {
      alert('Dado Salvo no banco de dados')
      this.getAllQuestions()
    }, (error: HttpErrorResponse) => {
      console.log(error)
    })
  }

  answerQuestion(question: Question) {
    this.answerQuestionId = question.id ? question.id : 0
    this.input.nativeElement.focus()
  }

  sendQuestionToDB() {
    if (this.answerQuestionId == 0) {
      alert('ID da pergunta é inválido')
      return
    } else {
      this.webApiService.answerQuestion({ answer: this.answer, QuestionId: this.answerQuestionId })
      .subscribe(value => {
        alert('Resposta salva com sucesso')
        this.getAllQuestions()
      }, (error: HttpErrorResponse) => {
        console.log(error)
      })
    }
  }
}
