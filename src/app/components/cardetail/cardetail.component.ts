import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';
import { environment } from 'src/environments/environment';
import { CarDetail } from '../../models/carDetailDto';
import {RentalService} from '../../services/rental.service'
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails: CarDetail[] = [];
  dataLoaded = false;
  imageBasePath = environment.baseUrl;
  rentalControl = false;
  rentalMessage="";

  constructor(private carService:CarService, private rentalService: RentalService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["carId"]){
        this.getCarDetail(params["carId"]);
      }
     
    });
  }

  getCarDetail(carId:number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

  getrentaldetailsbyid(carId:number) {
    this.rentalService.getRentalDetailsById(carId).subscribe((response) => { 
      this.rentalControl=response.succes;
      this.rentalMessage=response.message; 
    });

  
}}