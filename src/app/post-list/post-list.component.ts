import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ngOnInit() {
    this.recordId = this.route.snapshot.paramMap.get("id");
    const feeds = this.feedDataService.getFeeds();
    const feed = feeds.find ( feed => feed.id === this.recordId);

    // get feed posts from feed
    console.log(feed);


    // get the data ...

    
  }

}
