import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(private postService: PostService) { }


  ngOnInit() {
    this.favoriteCount = this.postService.favoriteList.length;
    this.postService.sub.subscribe(data => this.favoriteCount = data.length )
  }

  favoriteCount: number;

}
