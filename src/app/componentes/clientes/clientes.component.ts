import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from "../../services/blog.service";
import {first, firstValueFrom} from "rxjs";
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  imageObject: Array<any> = [];

  @Input() clientsShow = 15;

  clientes: any;

  splide!: any;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    firstValueFrom(this.blogService.clients({slug: 'clientes'})).then((response: any) => {
      this.clientes = response[0].acf.clientes.splice(0, this.clientsShow);
      this.getImagesURL();
    });
  }

  getImagesURL() {
    this.clientes.forEach((client: any, index: any) => {
      this.blogService.media(client.foto).pipe(first()).subscribe((response: any) => {
        this.clientes[index]['url'] = response['source_url'];
        this.imageObject.push({
          image: response['source_url'],
          thumbImage: response['source_url'],
          title: client.cliente
        });

        this.mountSplide();
      });
    })
  }

  mountSplide() {
    this.splide = new Splide( '.splide', {
      perPage: 3,
      pagination: false,
      lazyLoad: true,
      padding: {
        left: 10,
        right: 10
      },
      breakpoints: {
        1023: {
          perPage: 1,
        },
        1280: {
          perPage: 2,
        }
        
      }
    } ).mount();
  }

}
