import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class UniboPostsService {

  public posts: Post[] = [];
  public post: Post = new Post({});

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get(environment.api.urlPosts);
  }

  public getUsers() {
    return this.http.get(environment.api.urlUsers);
  }

  public getComments() {
    return this.http.get(environment.api.urlComments);
  }

  /**
   * 
   * @param idPost número de identificación de un post
   * @returns observable con el post obtenido del servicio para un ID determinado
   */
  public getPost(idPost: number): Observable<Post> {
    return this.http.get(environment.api.urlPosts)
      .pipe(
        map(response => {
          if (response) {
            Object.assign(this.posts, response);
            this.posts.forEach((post) => {
              if (post.id === idPost) {
                this.post = post;
              }
            });
            return this.post;
          } else {
            throw new Error();
          }
        }
        ));
  }
}
