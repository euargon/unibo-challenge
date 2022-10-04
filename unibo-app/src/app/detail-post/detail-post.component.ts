import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { UniboPostsService } from '../services/unibo-posts.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.scss']
})
export class DetailPostComponent implements OnInit {

  public idPost: number = 0;
  public post: Post = new Post({});
  public posts: Post[] = [];
  public users: any[] = []; // TODO: el usuario debería tener un modelo igual que los Post
  public user: any = ''; // TODO: el usuario debería tener un modelo igual que los Post
  public comments: any[] = []; // TODO: el comentario debería tener un modelo igual que los Post
  public postComments: any[] = []; // TODO: el comentario debería tener un modelo igual que los Post

  constructor(private activeRoute: ActivatedRoute,
    private uniboService: UniboPostsService) {
   }

  ngOnInit(): void {
    this.idPost = Number.parseInt(this.activeRoute.snapshot.params['id']);
    this.getUserPost();
    this.getUsers();
    this.getComments();
  }

  /**
   * Obtiene el post que corresponde a un ID específico
   */
  public getUserPost() {
    this.uniboService.getPost(this.idPost).subscribe(post => this.post = post);
  }

  /**
   * Obtiene el usuario al que corresponde el post así como su información (cruzando por ID)
   */
  public getUsers() {
    this.uniboService.getUsers().subscribe((response) => {
      if(response) {
        Object.assign(this.users, response);
        this.users.forEach((user) => {
          if(user.id === this.post.userId) {
            this.user = user;
          }
        });
      }
    });
  }

  /**
   * Obtiene los comentarios que corresponden al post (cruzando por ID)
   */
  public getComments() {
    this.uniboService.getComments().subscribe((response) => {
      if(response) {
        Object.assign(this.comments, response);
        this.comments.forEach((comment) => {
          if(comment.postId === this.post.id) {
            this.postComments.push(comment);
          }
        });
      }
    });
  }

}
