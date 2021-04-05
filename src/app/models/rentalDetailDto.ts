export interface RentalDto{
    id:number;
    carId:number;
    carName:string;
    brandName:string;
    colorName:string;
    description:string;
    modelYear:number;
    dailyPrice:number;
    userName:string;
    companyName:string;
    rentDate:Date;
    returnDate?:Date;
    
}