import { Component, OnInit } from '@angular/core';
import { Feed } from './core/entity/feed';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit  {

  feeds: Feed[] = [];
  constructor() {}
  ngOnInit(): void {
    this.feeds = new Array<Feed>();

    const feed1 = new Feed();
    feed1.title = "The Morning Brew";
    feed1.url = "http://feeds.feedburner.com/ReflectivePerspective";
    this.feeds.push(feed1);

    const feed2 = new Feed();
    feed2.title = "Scott Hanselman";
    feed2.url = "http://feeds.feedburner.com/ScottHanselman";
    this.feeds.push(feed2);

    const feed3 = new Feed();
    feed3.title = "JavaScript Weekly";
    feed3.url = "https://cprss.s3.amazonaws.com/javascriptweekly.com.xml";
    this.feeds.push(feed3);

    const feed4 = new Feed();
    feed4.title = "6 Figure Developer";
    feed4.url = "https://6figuredev.com/feed/";
    this.feeds.push(feed4);

    const feed5 = new Feed();
    feed5.title = ".NET Rocks";
    feed5.url = "http://www.pwop.com/feed.aspx?show=dotnetrocks&filetype=master";
    this.feeds.push(feed5);    
  }

  onFeedClick(feed: Feed) {
    console.log(feed);
  }
}
