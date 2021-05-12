import { Component, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent 
{
  //array of objects or products -> to be sent to child
  productArr:productObj[]=
  [
    {
      productTitle:"Air Pods",
      productData:"Imported Airpods Pro with Wireless Charging Case",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/71AZQjspjoL._AC_SL1500_.jpg"
    },
    {
      productTitle:"i watch",
      productData:"Smartwatch Band,Mesh Magnetic Stainless Steel Strap",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/813MTuqe0iL._AC_SL1500_.jpg"
    },
    {
      productTitle:"Nike Shoes",
      productData:"Nike Women's WMNS Court Royale Training.",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/51zjnu9u6gL._AC_UL1024_.jpg"
    },
    {
      productTitle:"Syska LED",
      productData:"Syska 12-Watt B-22 Wi-Fi Enabled Smart LED Bulb",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/71peh%2BXj5XL._AC_SL1500_.jpg"
    },
    {
      productTitle:"Liquid Detergent",
      productData:"Ariel Matic Liquid Detergent Top Load 2 Ltr",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/41Gu%2BLg9RjL._AC_.jpg"
    },
    {
      productTitle:"Masks",
      productData:"STAR WORK - 6 Pcs Fashion Flowers Cloth printed",
      productImage:"https://images-na.ssl-images-amazon.com/images/I/91k1SSHV0tL._AC_UL1500_.jpg"
    }
  ];
 
}

