import { Component, OnInit } from '@angular/core';
import {first, firstValueFrom} from "rxjs";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clientes!: any;
  imageObject: any = [];

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    firstValueFrom(this.blogService.clients({slug: 'clientes'})).then((response: any) => {
      this.clientes = response[0].acf.clientes;
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
        })
      });
    })
  }
}
