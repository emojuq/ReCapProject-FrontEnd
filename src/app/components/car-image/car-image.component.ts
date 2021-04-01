import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carimage';
import { CarImageService } from 'src/app/services/carImage.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  path="https://localhost:44341/uploads/CarImages/"
  carImages: CarImage[] = [];
  constructor(private carImageService: CarImageService,private activatedRouted: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouted.params.subscribe(params => {
      if(params["carId"])
      {
        this.getCarImages(params["carId"])
      }
    })  
  }

  getCarImages(carId:number) {
    this.carImageService.getCarImages(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

}