import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_template/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './_template/main/main.component';
import { BlogSectionComponent } from './componentes/blog-section/blog-section.component';
import {HttpClientModule} from "@angular/common/http";
import {NgImageSliderModule} from "ng-image-slider";
import { ClientesComponent } from './componentes/clientes/clientes.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';
import {RouterModule} from "@angular/router";
import { GenericPageComponent } from './pages/generic-page/generic-page.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { BlogComponent } from './pages/blog/blog.component';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule, NgxUiLoaderRouterModule,
  PB_DIRECTION,
  POSITION,
  SPINNER
} from "ngx-ui-loader";
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "red",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness,
  logoUrl: '/assets/raposo66-logotipo.png'
};
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainComponent,
    BlogSectionComponent,
    ClientesComponent,
    QuemSomosComponent,
    GenericPageComponent,
    FooterComponent,
    ClientsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxUiLoaderModule.forRoot({
      pbColor: "#F48120",
      bgsSize: 40,
      logoUrl: '/assets/logo-load.png',
      logoSize: 180,
      overlayColor: 'black'
    }),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      exclude: ['https://blog.raposo66.com/wp-json/wp/v2/media/']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

