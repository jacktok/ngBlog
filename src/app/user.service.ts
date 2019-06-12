import { Injectable } from '@angular/core';
import { User } from './user';
import { UserRole } from './user-role.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: User[] = [
    { id: 1, name: 'user1', role: UserRole.general },
    { id: 2, name: 'user1', role: UserRole.general },
    { id: 3, name: 'user1', role: UserRole.general },
    { id: 4, name: 'user1', role: UserRole.general },
    { id: 5, name: 'user1', role: UserRole.general },
  ]
  constructor() { }

  getUsers(ids: number[]): User[] {

    return this.userList;
  }
}
