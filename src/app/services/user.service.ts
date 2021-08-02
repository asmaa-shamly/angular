import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  allUsers:Users[]=[]
  
}
