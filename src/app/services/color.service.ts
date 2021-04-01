import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl=environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath=environment.apiUrl+"colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
  getColorById(id: number): Observable<ListResponseModel<Color>> {
    let newUrl = this.apiUrl+'colors/getbyid'+id
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
}
