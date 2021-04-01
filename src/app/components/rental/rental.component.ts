import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { RentalDto } from 'src/app/models/rentalDto';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
  
  rentals:Rental[]=[];
  rentalDto:RentalDto
  
  

  constructor(private rentalService:RentalService,private router:Router,
    private customerService:CustomerService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
      this.rentals=response.data;
    })
  }

  
}


