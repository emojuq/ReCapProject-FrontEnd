import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carimage';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  imageBasePath = environment.baseUrl

  constructor(private httpClient:HttpClient) { }

  getCarImages(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath = environment.apiUrl+"carImages/getimagesbyid?carId="
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath+carId)
  }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.imageBasePath+"carimages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}