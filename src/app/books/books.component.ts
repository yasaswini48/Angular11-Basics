import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { productObj } from '../models.ts/products.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent  implements OnInit
{
 /* constructor()
  {
    console.log("Books Object Created - Constructor!");
  }
  ngOnInit()
  {
    console.log("Books Object Created - ngOnInit!");
  }
  ngOnDestroy()
  {
   console.log("Books Obj destroyed");
  }*/
  
  bkArr:productObj[];
  //Injecting the dependency / service obj
  constructor(private bsObj:BooksService)  
  { }
  //Calling the method to get data from service
  ngOnInit()
  {
   this.bkArr=this.bsObj.getBooksData(); 
  }

}
