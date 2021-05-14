import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { TelivisionsComponent } from './telivisions/telivisions.component';

const routes: Routes = 
[
{path:'home',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'contact us',component:ContactusComponent},
{path:'products',component:ProductsComponent,children:
[
  {path:'mobiles',component:MobilesComponent},
  {path:'books',component:BooksComponent},
  {path:'telivisions',component:TelivisionsComponent},
  {path:'',redirectTo:'/products/mobiles',pathMatch:'full'}
]
},
{path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

