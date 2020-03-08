import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/interface/user.interface';
import {PostService} from './post/post.service';
import { Post } from 'app/interface/post.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public user: User;
  public posts: Post[];

  constructor(private activedRoute: ActivatedRoute,
              private postService: PostService) {}

  ngOnInit() {
    this.activedRoute.data.subscribe(params => {
      const { user } = params;
      this.user = user;
    });

    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }



}
