import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {productObj} from '../productsObjects.model'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent
{
  @Input() prObj:productObj;   //receiving details from parent to child 

  @Output() sendEvent=new EventEmitter;  //To send data from child to parent
  sendToParent(selectedItem:string)     //sending details to Parent
  { 
     this.sendEvent.emit(selectedItem);  //The item selected by user is sent to Parent
  }
}
