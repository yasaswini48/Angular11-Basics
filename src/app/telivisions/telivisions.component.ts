import { Component, OnDestroy, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';
import { TelivisionsService } from '../telivisions.service';

@Component({
  selector: 'app-telivisions',
  templateUrl: './telivisions.component.html',
  styleUrls: ['./telivisions.component.css']
})
export class TelivisionsComponent implements OnInit
{
  /*constructor()
  {
    console.log("Tvs Object Created - Constructor!");
  }
  ngOnInit()
  {
    console.log("Tvs Object Created - ngOnInit!");
  }
  ngOnDestroy()
  {
   console.log("Tvs Obj destroyed");
  }*/
  
  tvArr:productObj[];
  //Inject dependency
  constructor(private tsObj:TelivisionsService)
  { }
  //get data from service by calling method in it
  ngOnInit()
  {
    this.tvArr=this.tsObj.getTvData();
  }

}

