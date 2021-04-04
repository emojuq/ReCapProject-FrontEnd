import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentCard } from '../models/payment'
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient) {}

  add(rental: PaymentCard): Observable<ResponseModel> {
    let newPath=environment.apiUrl+"payments/paymentadd"
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'paymentadd', rental);
  }}