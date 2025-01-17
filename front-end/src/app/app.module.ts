import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AuthComponent } from './header/auth/auth.component';
import { CartComponent } from './header/cart/cart.component';
import { WithlistComponent } from './header/withlist/withlist.component';
import { CompareComponent } from './header/compare/compare.component';
import { ProductComponent } from './header/menu-top/product/product.component';
import { RankComponent } from './header/menu-top/rank/rank.component';
import { AboutUsComponent } from './header/menu-top/about-us/about-us.component';
import { BlogComponent } from './header/menu-top/blog/blog.component';
import { ErrorComponent } from './header/menu-top/error/error.component';
import { EnglishbookComponent } from './body/menu-body/englishbook/englishbook.component';
import { SachTiengVietComponent } from './body/menu-body/sach-tieng-viet/sach-tieng-viet.component';
import { QuaLuuNiemComponent } from './body/menu-body/qua-luu-niem/qua-luu-niem.component';
import { VanPhongPhamComponent } from './body/menu-body/van-phong-pham/van-phong-pham.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { ContactComponent } from './header/menu-top/contact/contact.component';
import { CheckoutComponent } from './header/cart/checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import de from '@angular/common/locales/de';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

import { reducers } from './_reducers';
import { LoginUserComponent } from './header/auth/login-user/login-user.component';
import { DetailUserComponent } from './header/auth/detail-user/detail-user.component';

registerLocaleData(de);


@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BannerComponent,
    AuthComponent,
    CartComponent,
    WithlistComponent,
    CompareComponent,
    ProductComponent,
    RankComponent,
    AboutUsComponent,
    BlogComponent,
    ErrorComponent,
    EnglishbookComponent,
    SachTiengVietComponent,
    QuaLuuNiemComponent,
    VanPhongPhamComponent,
    SearchproductComponent,
    ContactComponent,
    CheckoutComponent,
    LoginUserComponent,
    DetailUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    AuthRoutingModule,
    AuthModule,
    // StoreModule.forRoot(reducers),

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
