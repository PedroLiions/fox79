import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts!: any;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.posts({per_page	: 3}).subscribe((posts: Post[]) => this.posts = posts);
  }

}
