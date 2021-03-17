import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car';

import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=environment.apiUrl+"cars/getdetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + 'cars/getdetailsbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + 'cars/getdetailsbycolorid?colorId='+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
    let newPath = environment.apiUrl + 'cars/getcardetail?carId='+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
}
  


