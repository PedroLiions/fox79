import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.scss']
})
export class BlogSectionComponent implements OnInit {

  posts?: any[];

  constructor(
    private blogService: BlogService
  ) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.blogService.posts({per_page	: 3}).subscribe((posts: Post[]) => this.posts = posts);
  }

  getThumbURL(post: any) {
    if (post['_embedded']['wp:featuredmedia']) {
      return 'https://blog.raposo66.com/wp-content/uploads/' + post['_embedded']['wp:featuredmedia'][0]['media_details']['file']
    }
    return '';
  }

}
