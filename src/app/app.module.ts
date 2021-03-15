import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from '../components/car/car.component';
import { NaviComponent } from '../components/navi/navi.component';
import { BrandComponent } from 'src/components/brand/brand.component';
import { ColorComponent } from 'src/components/color/color.component';
import { RentalComponent } from 'src/components/rental/rental.component';
import { CustomerComponent } from 'src/components/customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    NaviComponent,
    BrandComponent,
    CarComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
