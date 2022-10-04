import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { UniboPostsService } from '../services/unibo-posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  public idPost: number = 0;
  public post: Post = new Post({});

  constructor(private activeRoute: ActivatedRoute,
    private uniboService: UniboPostsService) { }

  ngOnInit(): void {
    this.idPost = Number.parseInt(this.activeRoute.snapshot.params['id']);
    this.uniboService.getPost(this.idPost).subscribe(post => this.post = post);
  }

}
