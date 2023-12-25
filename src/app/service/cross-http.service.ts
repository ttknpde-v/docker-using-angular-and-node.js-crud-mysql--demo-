import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Romance} from "../entity/romance";
@Injectable({
  providedIn: 'root'
})
export class CrossHttpService {
  private httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');  // use when send url + arg !!
  private httpClient : HttpClient
  private readonly ROMANCE_API : string = 'http://localhost:3200/'; // 3200 is backend port that I exposed on backend
  constructor(httpClient : HttpClient) {
    this.httpClient = httpClient;
  }
  reads() {
    return this.httpClient.get<Romance>(this.ROMANCE_API+`reads`);
  }
}
