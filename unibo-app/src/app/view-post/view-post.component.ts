import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Post } from '../models/post.model';
import { UniboPostsService } from '../services/unibo-posts.service';
import { UniboUtilsService } from '../services/unibo-utils.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  public posts: Post[] = [];
  public allPosts: Post[] = [];
  public users: number[] = [];

  constructor(private uniboService: UniboPostsService, 
    private utilsService: UniboUtilsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPostsInfo();
  }

  public getPostsInfo() {
    this.uniboService.getPosts().subscribe((response) => {
      if(response) {
        Object.assign(this.posts, response);
        Object.assign(this.allPosts, response);
        this.posts.forEach(post => {
          if (this.users.indexOf(post.userId)===-1) {
            this.users.push(post.userId);
          }
        });
      }
    });
  }

  public filterUser() {
    let selectElement = document.getElementById('userIds') as HTMLInputElement;
    let selectValue: any = selectElement.value;
    if (this.utilsService.isNumber(selectValue)) {
      selectValue = Number.parseInt(selectElement.value);
      this.posts = this.allPosts.filter(post => post.userId === selectValue);
    } else {
      this.posts = this.allPosts;
    }
  }

  public goToDetail(idPost: number) {
    this.router.navigate(['detail/' + idPost]);
  }

  public goToEdit(idPost: number) {
    this.router.navigate(['edit/' + idPost]);
  }

}
