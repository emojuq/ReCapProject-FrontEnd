import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

 apiUrl=environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>>{
    let newPath=environment.apiUrl+"brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath)
  }

  getBrandById(id: number): Observable<ListResponseModel<Brand>> {
    let newUrl = this.apiUrl+'brands/getbyid'+id;
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

}
