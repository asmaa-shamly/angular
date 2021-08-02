import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/postModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  posts:Posts={}
  id:string =this.route.snapshot.params.id
  constructor(private postService:PostService,private route:ActivatedRoute) { }

  updatePosts(posts:any){
    console.log(this.id)
    this.postService.updatePosts(this.id,posts).subscribe(()=>{})

  }
  getSinglePost(){
    this.postService.getSinglePost(this.id).subscribe((res)=>{
      this.posts=res
      console.log(res)
    })
  }
  ngOnInit(): void {
    this.getSinglePost()
  }

}
