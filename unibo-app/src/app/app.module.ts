import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UniboPostsService } from './services/unibo-posts.service';
import { ViewPostComponent } from './view-post/view-post.component';
import { DetailPostComponent } from './detail-post/detail-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { CreatePostComponent } from './create-post/create-post.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewPostComponent,
    DetailPostComponent,
    EditPostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [UniboPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
