import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {
  like=0;
  dislike=0;
  likes(){
    this.like=this.like+1;
  }
  dislikes(){
    this.dislike=this.dislike+1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
