import { Component, OnInit } from '@angular/core';
import {firstValueFrom} from "rxjs";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name: string = '';
  public subject: string = '';
  public message: string = '';

  heroText: string = '';
  heroTitle: string = '';
  heroSubTitle: string = '';
  quemSomosTitle: string = '';
  quemSomosTexto: string = '';

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    firstValueFrom(this.blogService.pageById(53)).then((response: any) => {
      this.heroText = response.acf.herotext;
      this.heroSubTitle = response.acf.herosubtitle;
      this.heroTitle = response.acf.herotitle;
      this.quemSomosTitle = response.acf.quemsomostitle;
      this.quemSomosTexto = response.acf.quemsomostexto;
    });
  }

  openMailClient() {
    window.location.href = `mailto:social@raposo66.com?subject=${this.name} - ${this.subject}&body=${this.message}`;
  }

}
