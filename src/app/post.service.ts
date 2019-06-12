import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTES } from './post-mockup';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postList: Post[] = POSTES;
  favoriteList: number[] = []
  sub: Subject<number[]> = new Subject()
  constructor() {
    this.sub.next(this.favoriteList)
  }


  getPostes(): Post[] {
    return this.postList;
  }

  getPost(id: number) {
    return this.postList.find(p => p.id == id);
  }

  addFavorite(postId: number) {
    if (this.favoriteList.find(id => id == postId) == null) {
      this.favoriteList.push(postId);
      console.log("add favorite " + postId)
      this.sub.next(this.favoriteList)
    }
  }

  removeFavorite(postId: number) {
    if (this.favoriteList.find(id => id == postId) != null) {
      this.favoriteList = this.favoriteList.filter(id => id != postId);
      console.log("remove favorite " + postId)
      this.sub.next(this.favoriteList)
    }
  }
}
