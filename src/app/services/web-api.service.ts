import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  private readonly baseURL = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.baseURL}/questions`)
  }

  getQuestionById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.baseURL}/question/${id}`)
  }

  createQuestion(question: Question): Observable<any> {
    return this.http.post(`${this.baseURL}/question`, question)
  }

  answerQuestion(answer: Answer): Observable<any> {
    return this.http.post(`${this.baseURL}/answer/${answer.QuestionId}`, answer)
  }
}