import { Injectable } from '@angular/core';
import { productObj } from './models.ts/products.model';

@Injectable({
  providedIn: 'root'
})
export class MobilesService 
{ 
   //Array of Mobiles Data
   mobilesArr:productObj[]=
   [
     {
      productTitle:'Realme narzo',
      productData:'Realme narzo 30 Pro (Blade Sliver, 8GB RAM, 128GB Storage)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/81YPGNaaNiS._AC_SL1500_.jpg'
     },
     {
       productTitle:'OnePlus 9 Pro',
       productData:'OnePlus 9 Pro 5G (Morning Mist, 12GB RAM, 256GB Storage)',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/61LvUvbZGlL._AC_SL1500_.jpg'
      },
      {
       productTitle:'OPPO F19 Pro',
       productData:'OPPO F19 Pro (Crystal Silver, 8GB RAM, 128GB Storage)No cost/EMI',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/71KlQWpei4L._AC_SL1500_.jpg'
      },
      {
       productTitle:'Samsung A72',
       productData:'Samsung Galaxy A72 (Violet, 8GB RAM, 128GB Storage)No cost/EMI',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/81nEqE5WMuL._AC_SL1500_.jpg'
      },
      {
       productTitle:'Samsung S21',
       productData:'Samsung Galaxy S21 Plus 5G (Phantom Violet, 8GB RAM',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/91QuYeAEXVL._AC_SL1500_.jpg'
      },
      {
       productTitle:'Vivo V20 Pro',
       productData:'Vivo V20 Pro 5G Sunset Melody, 8GB RAM',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/71HLaYtc%2BJL._AC_SL1200_.jpg'
      },
      {
       productTitle:'OnePlus Nord',
       productData:'OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)',
       productImage:'https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._AC_SL1500_.jpg'
      }   
   ];
   //method to return above data
   getMobilesData():productObj[]
   {
     return this.mobilesArr;
   } 

}
