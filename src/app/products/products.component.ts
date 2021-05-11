import { Component, OnInit } from '@angular/core';
import {productObj} from '../productsObjects.model'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  
{
 //Array Of objects to be sent to Children
  productArr:productObj[]=
  [
    {
      productTitle:'Wall Sticker',
      productData:'Amazon Brand -Solimo Wall Sticker for Living Room(Ride through Nature)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71ZRX1MDF9L._AC_SL1200_.jpg'
    },
    {
      productTitle:'Ipad Pro',
      productData:'New Apple 12.9-inch iPad Pro with Apple M1 chip (Wi-Fi + Cellular, 128GB)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/81sxRBhe2sS._AC_SL1500_.jpg'
    },
    {
      productTitle:'Baby Food Mix',
      productData:'Slurrp Farm Organic Baby Cereal,Ragi and Mango with Milk, Food for Babies',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71v-pcpYTiL._AC_SL1500_.jpg'
    },
    {
      productTitle:'Dairy MilK Oreo',
      productData:'Cadbury Dairy Milk Silk Oreo Chocolate loaded with crunchy Oreos',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71l5hCnGe2L._AC_SL1500_.jpg'
    },
    {
      productTitle:'Sofa Set',
      productData:'Woodcasa 4 Seater Roland LHS Fabric L Shape Sofa Set- (Dark Blue-Light Grey)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71VMOeKtX5L._AC_SL1100_.jpg'
    },
    {
      productTitle:'Dark Fantasy',
      productData:'Sunfeast Dark Fantasy Cookies - Choco Fills, Loaded with Chocolate 300g',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/81rt1QmhZIL._AC_SL1500_.jpg'
    },
    {
      productTitle:'Mango Juice',
      productData:'B Natural Ratnagiri Alphonso, Mango Juice 750ml (Pack of 2 Offer Hurry!)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/61cZrNKLUOL._AC_SL1000_.jpg'
    },
    {
      productTitle:'Epigamia',
      productData:'Epigamia Greek Yogurt, Strawberry, 90g,Fresh with No preservatives',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/615fpkT-NTL._AC_SL1000_.jpg'
    }

  ] 
  gotItemsArr:string[]=[];
  gotFromChild(gotItem:string)  //data got from child 
  {
     this.gotItemsArr.push(gotItem);  //pushing the items into array
  }
  

}
