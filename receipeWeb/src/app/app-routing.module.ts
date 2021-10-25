import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { ShopComponent } from './shop/shop.component';
import { ShopdetailComponent } from './shopdetail/shopdetail.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog-detail', component: BlogdetailComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop-detail/:id', component: ShopdetailComponent }
  // {path:'**',redirectTo:'/',pathMatch:'full'}
  // { path: '**', redirectTo: '' },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
