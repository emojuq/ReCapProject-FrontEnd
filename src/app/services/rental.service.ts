import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=environment.apiUrl+"rentals/getdetail"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
}
