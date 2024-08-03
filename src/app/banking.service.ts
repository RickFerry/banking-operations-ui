import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankingService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  withdraw(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/event`, data);
  }

  deposit(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/event`, data);
  }

  transfer(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/event`, data);
  }

  getBalance(accountId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/balance?account_id=${accountId}`);
  }
}
