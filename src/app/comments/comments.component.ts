import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments()
      .subscribe( data => this.comments = data);    
  }
}
