import { Component, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit
{
  productArr:productObj[]=[];
  //The service object is injected here -> dependecy injection done
  constructor(private tsObj:TransferService)
  {  }
  //Getting data whenever intialised
  ngOnInit()
  {
   this.productArr=this.tsObj.sendData()
  }

 
}

