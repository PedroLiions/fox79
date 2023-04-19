import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./_template/main/main.component";
import {HomeComponent} from "./pages/home/home.component";
import {GenericPageComponent} from "./pages/generic-page/generic-page.component";
import {ClientsComponent} from "./pages/clients/clients.component";
import {BlogComponent} from "./pages/blog/blog.component";

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'clientes',
        component: ClientsComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: ':slug',
        component: GenericPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
