import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {firstValueFrom} from "rxjs";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.component.html',
  styleUrls: ['./generic-page.component.scss']
})
export class GenericPageComponent implements OnInit {

  slug!: string;

  title!: string;
  content!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((response: any) => {
      this.slug = response?.slug;

      firstValueFrom(this.blogService.clients({slug: this.slug})).then((response: any) => {
        this.content = response[0].content.rendered;
        this.title = response[0].title.rendered;
      });
    });


  }

}
