import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  constructor(public postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.post = this.postService.getPost(+param.get('postId'));
      this.isLike = this.postService.favoriteList.find(id => id == this.post.id) != null;
      this.postService.sub.subscribe(data => {
        this.isLike = this.postService.favoriteList.find(id => id == this.post.id) != null;
      })
    })
  }

  post: Post;
  isLike: boolean;
}
