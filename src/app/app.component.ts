import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from './core/entity/feed';
import { FeedDataService } from './core/service/feed-data-service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  feeds: Feed[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedDataService: FeedDataService
  ) { }
  ngOnInit(): void {
    this.setupFeedList();
  }

  private setupFeedList() {
    this.feeds = this.feedDataService.getFeeds();
  }

  onFeedClick(feed: Feed) {
    console.log(feed);

    const url = '/feed/' + feed.id;

    this.router.navigate([url]);
  }
}
