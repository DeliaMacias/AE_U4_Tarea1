import { Component, OnInit } from '@angular/core';
import {PostsService} from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  public posts;

  constructor(private postService: PostsService) { 
    this.posts = postService.posts;
  }

  ngOnInit() {
  }

}
