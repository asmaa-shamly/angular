import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/postModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts:Posts[]=[]
  constructor( private postService:PostService ) { }

  getPost(){
    this.postService.getPost().subscribe((res)=>{
      this.posts=res
    },(error)=>{
      console.log(error)
    })
  }
  
  
  addPosts(posts:Posts){
    // console.log(posts)
    this.postService.addPosts(posts).subscribe(()=>{
      this.posts.splice(0,0,posts)
    })
  }

  deletePosts(posts:Posts){
    this.postService.deletePosts(posts.id).subscribe(()=>{
      let index = this.posts.indexOf(posts)
      this.posts.splice(index,1)
    })
  }
  ngOnInit(): void {
    this.getPost()
  }

}
