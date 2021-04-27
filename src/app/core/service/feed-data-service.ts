import { Injectable } from "@angular/core";
import { Feed } from "../entity/feed";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedDataService
{
  private rssToJsonServiceBaseUrl: string = 'https://rss2json.com/api.json?rss_url=';

  constructor(
    private http: HttpClient
  ) { }

  getFeed(url: string) {
    return this.http.get(this.rssToJsonServiceBaseUrl + url).toPromise();
  }

  getFeeds() {
    let feeds = new Array<Feed>();

    const feed1 = new Feed();
    feed1.id = "1";
    feed1.title = "The Morning Brew";
    feed1.url = "http://feeds.feedburner.com/ReflectivePerspective";
    feeds.push(feed1);

    const feed2 = new Feed();
    feed2.id = "2";
    feed2.title = "Scott Hanselman";
    feed2.url = "http://feeds.feedburner.com/ScottHanselman";
    feeds.push(feed2);

    const feed3 = new Feed();
    feed3.id = "3";
    feed3.title = "JavaScript Weekly";
    feed3.url = "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml";
    feeds.push(feed3);

    const feed4 = new Feed();
    feed4.id = "4";
    feed4.title = "6 Figure Developer";
    feed4.url = "https://6figuredev.com/feed/";
    feeds.push(feed4);

    const feed5 = new Feed();
    feed5.id = "5";
    feed5.title = ".NET Rocks";
    feed5.url = "http://www.pwop.com/feed.aspx?show=dotnetrocks&filetype=master";
    feeds.push(feed5);

    const feed6 = new Feed();
    feed6.id="6";
    feed6.title = "Michael Hyatt";
    feed6.url = "https://michaelhyatt.com/feed/";
    feeds.push(feed6);

    const feed7 = new Feed();
    feed7.id="7";
    feed7.title = "Chris Locurto";
    feed7.url = "https://chrislocurto.com/feed/";
    feeds.push(feed7);


    return feeds;
  }
}