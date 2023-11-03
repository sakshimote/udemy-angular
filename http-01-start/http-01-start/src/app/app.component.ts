import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  loadedPosts :Post[]= [];

  isFetching=false;

  error=null;

  private errorSubscriber:Subscription;

  constructor(private http: HttpClient,private postService:PostService) {}

  ngOnInit() {

this.errorSubscriber= this.postService.error.subscribe(err=>{
  this.error=err;
});

    this.isFetching=true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.loadedPosts=posts;
      this.isFetching=false;  
    },error=>{
      this.error=error.message;
      this.isFetching=false;  
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request

//     this.http.post<{name:string}>('https://testproject-a93ef-default-rtdb.firebaseio.com/posts.json',postData)
//   .subscribe((responseData)=>{
// console.log(responseData);
//     })
  //  console.log(postData);

  this.postService.createAndStorePost(postData.title,postData.content);
  }

  onFetchPosts() {
    // Send Http request

    this.isFetching=true;
    this.postService.fetchPosts().subscribe(posts=>{
      this.loadedPosts=posts;
      this.isFetching=false;  
    },error=>{
      this.error=error.message;
      this.isFetching=false;  
    });


  }

  onClearPosts() {
  
    // Send Http request
    this.postService.deletePosts().subscribe(data=>{
      this.loadedPosts=[];
    })
  }

  // private fetchPosts(){
  //   this.isFetching=true;
  //   this.http.get<{[key:string]:Post}>('https://testproject-a93ef-default-rtdb.firebaseio.com/posts.json')
  //   .pipe(map((responseData)=>{
  //     const postArr:Post[]=[];
  //     for(const key in responseData){
  //       if(responseData.hasOwnProperty(key)){
  //         postArr.push({...responseData[key],id:key});
  //       }
        
  //     }
  //     return postArr;
  //   }))  .subscribe(posts=>{
  //     this.isFetching=false;
  //     this.loadedPosts=posts;
  //   })
  // }

  ngOnDestroy(){
    this.errorSubscriber.unsubscribe();

  }

  onHandleError(){
    this.error=null;
  }
}
