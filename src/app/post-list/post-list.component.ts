import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedData } from '../core/interfaces/feed-data';
import { FeedDataService } from '../core/service/feed-data-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private feedDataService: FeedDataService
  ) { }

  recordId: string = "";
  feedData : FeedData = new FeedData();

  ngOnInit() {
    this.recordId = this.route.snapshot.paramMap.get("id");
    const feeds = this.feedDataService.getFeeds();
    const feed = feeds.find ( feed => feed.id === this.recordId);

    this.feedDataService.getFeed(feed.url).then(data => {
      this.feedData = data as unknown as FeedData;
      console.log(data);
    });
  }
}
