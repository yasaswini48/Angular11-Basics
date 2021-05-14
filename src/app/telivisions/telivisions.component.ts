import { Component, OnInit } from '@angular/core';
import { productObj } from '../models.ts/products.model';

@Component({
  selector: 'app-telivisions',
  templateUrl: './telivisions.component.html',
  styleUrls: ['./telivisions.component.css']
})
export class TelivisionsComponent  
{
    tvsArr:productObj[]=[
    {
      productTitle:'OnePlus TV',
      productData:'OnePlus 80 cm (32 inches) LED Smart Android TV 32Y1 (Black) (2020 Model)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/81qtALn%2BGpL._AC_SL1500_.jpg'
    },
    {
      productTitle:'eAirtec TV',
      productData:'eAirtec 61 cms (24 inches) HD Ready LED TV 24DJ (Black) (2020 Model)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71FutyZQeXL._AC_SL1500_.jpg'
    },
    {
      productTitle:'Xiamio TV',
      productData:'Mi 80 cm (32 inches) Horizon Edition Android Smart LED TV 4A|L32M6-EI (Grey)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71A45JDbuxL._AC_SL1500_.jpg'
    },
    {
      productTitle:'TCL TV',
      productData:'TCL 100 cm (40 inches) Full HD Android Smart LED TV (Black) (2020 Model)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/612w-lzGffL._AC_SL1500_.jpg'
    },
    {
      productTitle:'',
      productData:'iFFALCON 108 cm (43 inches) Android LED TV 43K71 (Sliver) (2021 Model)',
      productImage:'https://images-na.ssl-images-amazon.com/images/I/71d12CjE8iS._AC_SL1500_.jpg'
    }
  ];

}

