import { Component, OnDestroy, OnInit } from '@angular/core';
import { MobilesService } from '../mobiles.service';
import { productObj } from '../models.ts/products.model';
@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit
{
  /*constructor()
  {
    console.log("Mobiles Object Created - Constructor!");
  }
  ngOnInit()
  {
    console.log("Mobiles Object Created - ngOnInit!");
  }
  ngOnDestroy()
  {
   console.log("Mobiles Obj destroyed");
  }*/

  mbArr:productObj[];
  //Injecting service Obj/dependency in component's const
  constructor(private msObj:MobilesService)        //assign the predefined obj created to msObj
  {  }
  //when the obj loaded , send info
  ngOnInit()
  {
    this.mbArr=this.msObj.getMobilesData();       //assign the data got from service method
  }






}
