import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ColorComponent} from './components/color/color.component';
import  {CarComponent} from './components/car/car.component'
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarDetailComponent } from './components/cardetail/cardetail.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { FilterColorPipePipe } from './pipes/filter-color-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/filter-brand-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {PaymentComponent} from './components/payment/payment.component'
import {CarFilterPipe} from './pipes/car-filter.pipe'
import {CarImageComponent} from './components/car-image/car-image.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component'
@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarComponent,
    BrandComponent, 
    CustomerComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent,
    FilterColorPipePipe,
    FilterBrandPipePipe,
    CarFilterPipe,
    PaymentComponent,
    CarImageComponent,
    RentalAddComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
