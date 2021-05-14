import { Component, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  
{
  //Arrays of books
  booksArr:productObj[]=[
    {
      productTitle:'The Magic of the Lost Temple',
      productData:'Ready to explore the depths of the magic hidden in the lost temple of Karnataka?',
      productImage:'https://www.bookgeeks.in/wp-content/uploads/2018/07/The-Magic-of-the-Lost-Temple-by-Sudha-Murthy.webp'
    },
    {
     productTitle:"Grandma's Bag of Stories",
     productData:'Collection of 20+ Illustrated stories,traditional Indian folk tales for all ages',
     productImage:'https://images-na.ssl-images-amazon.com/images/I/51NHKZC1a0L._SX324_BO1,204,203,200_.jpg'
    },
    {
      productTitle:'The Gopi Diaries: Coming Home',
      productData:"Told in Gopi's voice,the first book,begins with Gopi going to his new home",
      productImage:'https://www.bookgeeks.in/wp-content/uploads/2018/07/The-Gopi-Diaries-by-Sudha-Murty.jpg'
     },
     {
      productTitle:'How the Onion Got Its Layers',
      productData:"Onion has so many layers? And have you seen your mother's eyes water",
      productImage:'https://www.bookgeeks.in/wp-content/uploads/2018/07/How-the-Onion-Got-Its-Layers-by-Sudha-Murthy.jpg'
     },
     {
      productTitle:"The Serpent's Revenge",
      productData:'How many names does Arjuna have?Why was Yama cursed?',
      productImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk9tR_qmN8Vb9BmFU1D45iCLTYtDDC-T8CKQ&usqp=CAU'
     },
     {
       productTitle:'Gopi Dairies: Finding Love',
       productData:"'Gopi. You have brought me so much happiness!'",
       productImage:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612540899l/56645181.jpg'
     }
  ];



}
