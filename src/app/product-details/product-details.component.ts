import { Component, Input, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';
//import { productObj } from '../models/products.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  
{
   //to recieve the product data from parent
   @Input() obj:productObj;    //The data from the parent is of the type interface named productObj
   

}
