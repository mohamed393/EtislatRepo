import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private httpClient: HttpClient) { }
  url: string = "http://localhost:3000/api/forgottenmail";

  sendForgottenEmail(email) {
    return this.httpClient.post(this.url, email)

  }



}

