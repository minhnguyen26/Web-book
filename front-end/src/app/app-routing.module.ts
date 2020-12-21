import { CheckoutComponent } from './header/cart/checkout/checkout.component';
import { ContactComponent } from './header/menu-top/contact/contact.component';
import { VanPhongPhamComponent } from './body/menu-body/van-phong-pham/van-phong-pham.component';
import { SachTiengVietComponent } from './body/menu-body/sach-tieng-viet/sach-tieng-viet.component';
import { EnglishbookComponent } from './body/menu-body/englishbook/englishbook.component';
import { BlogComponent } from './header/menu-top/blog/blog.component';
import { AboutUsComponent } from './header/menu-top/about-us/about-us.component';
import { CompareComponent } from './header/compare/compare.component';
import { CartComponent } from './header/cart/cart.component';
import { BannerComponent } from './banner/banner.component';
import { BodyComponent } from './body/body.component';
import { AuthComponent } from './header/auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithlistComponent } from './header/withlist/withlist.component';
import { ProductComponent } from './header/menu-top/product/product.component';
import { RankComponent } from './header/menu-top/rank/rank.component';
import { ErrorComponent } from './header/menu-top/error/error.component';
import { QuaLuuNiemComponent } from './body/menu-body/qua-luu-niem/qua-luu-niem.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';

const routes: Routes = [
  { path:'', component:Component},
  { path:'auth', component:AuthComponent },
  { path:'index',component:BodyComponent },
  { path:'index',component:BannerComponent },
  { path:'cart',component:CartComponent },
  { path:'withlist',component:WithlistComponent },
  { path:'compare',component:CompareComponent },
  { path:'about-us',component:AboutUsComponent },
  { path:'blog', component:BlogComponent },
  { path:'product',component:ProductComponent},
  { path:'rank',component:RankComponent },
  { path:'englishbook',component:EnglishbookComponent },
  { path:'qua-luu-niem',component:QuaLuuNiemComponent },
  { path:'sach-tieng-viet',component:SachTiengVietComponent },
  { path:'van-phong-pham',component:VanPhongPhamComponent },
  { path:'error-404',component:ErrorComponent },
  { path: 'search-product', component:SearchproductComponent },
  { path:'contact', component:ContactComponent },
  { path:'checkout',component:CheckoutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
