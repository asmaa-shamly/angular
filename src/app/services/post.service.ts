import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../../../../../day3/postapp/src/app/interfaces/postModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/comments/'
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<Posts []>(this.url)
  }
  addPosts(post:Posts){
    return this.http.post(this.url,post)
  }
  updatePosts(id:any,post:Posts){
    return this.http.patch(this.url + id,post)
  }

  getSinglePost(id:any){
return this.http.get<Posts>(this.url+id)
  }

  deletePosts(id:any){
    return this.http.delete(this.url+ id )
  }
}
