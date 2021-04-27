export class FeedData {
  status: string = "";
  feed:   Feed = new Feed();
  items:  Item[] = [];
}

export class Feed {
  url:         string = "";
  title:       string = "";
  link:        string = "";
  author:      string = "";
  description: string  = "";
  image:       string  = "";
}

export interface Item {
  title:       string;
  pubDate:     Date;
  link:        string;
  guid:        string;
  author:      any;
  thumbnail:   string;
  description: string;
  content:     string;
  enclosure:   any;
  categories:  string[];
}
