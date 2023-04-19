import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  API = `${environment.api}/wp-json/wp/v2`;

  constructor(
    private http: HttpClient
  ) {
  }

  posts(params?: Params): Observable<Post[]> {
    let url = `${this.API}/posts?_embed`;

    if (typeof params === 'object') {
      url = url + '&' + new URLSearchParams(<any>params).toString();
    }

    return this.http.get(url) as Observable<Post[]>;
  }

  clients(params: Params) {
    let url = `${this.API}/pages`;

    if (typeof params === 'object') {
      url = url + '?' + new URLSearchParams(<any>params).toString();
    }

    return this.http.get(url);
  }

  pageById(id: number) {
    let url = `${this.API}/pages/${id}`;

    return this.http.get(url) as Observable<Post>;
  }

  media(id: number) {
    let url = `${this.API}/media/${id}`;
    return this.http.get(url);
  }
}

export interface Params {
  per_page?: number;
  page?: number;
  search?: string;
  order?: string;
  orderby?: string;
  title?: string;
  slug?: string;
}


