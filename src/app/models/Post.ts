export interface Post {
  id?: number;
  date?: string;
  date_gmt?: string;
  modified?: string;
  modified_gmt?: string;
  slug?: string;
  status?: string;
  type?: string;
  link?: string;
  title?: any;
  content?: Content;
  author?: number;
  featured_media?: string;
  comment_status?: string;
  ping_status?: string;
  sticky?: string;
  template?: string;
  format?: string;
  meta?: string;
  categories?: string;
  _embedded: {
    'wp:featuredmedia': Array<FeaturedMedia>
  }
}

export interface FeaturedMedia {
  media_details: {
    file: string;
  }
}

export interface Content {
  rendered?: string;
  protected?: boolean;
}
