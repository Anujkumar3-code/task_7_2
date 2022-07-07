import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  static usersList: User[] = [
    {
      id: '11',
      firstName: 'John',
      lastName: 'kartar',
      age: 23,
      login: 'john@yahoo.com',
      password: '1223467345',
      isDeleted: true,
    },
    {
      id: '12',
      firstName: 'Agent',
      lastName: 'Vinode',
      age: 22,
      login: 'agent@gmail.com',
      password: '3445436',
      isDeleted: false,
    },
    {
      id: '13',
      firstName: 'Raj',
      lastName: 'singh',
      age: 31,
      login: 'raj@gmail.com',
      password: '990987656',
      isDeleted: true,
    },
    {
      id: '14',
      firstName: 'Charan',
      lastName: 'kumar',
      age: 24,
      login: 'charan@gmail.com',
      password: '090987655',
      isDeleted: false,
    },
    {
      id: '15',
      firstName: 'Nitin',
      lastName: 'rajput',
      age: 33,
      login: 'nith@gmail.com',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '16',
      firstName: 'Ram',
      lastName: 'singh',
      age: 13,
      login: 'ram@gmail.com',
      password: '12345679',
      isDeleted: false,
    },
    {
      id: '17',
      firstName: 'vijay',
      lastName: 'kumar',
      age: 20,
      login: 'vijay@gmail.com',
      password: '000000009',
      isDeleted: true,
    },
    {
      id: '18',
      firstName: 'vijay1',
      lastName: 'kumar1',
      age: 25,
      login: 'vijaykumar@gmail.com',
      password: '012349',
      isDeleted:false,
    }
  ]
  constructor() { }

  static setActivation(id:string, isDeleted:boolean){
    const userId = this.usersList.findIndex((user:User) => user.id == id);
    this.usersList[userId].isDeleted = isDeleted;
  }
  static getDeletedUsers(): User[] {
    return this.usersList.filter((user:User) => user.isDeleted);
  }
  static getActiveUsers(): User[] {
    return this.usersList.filter((user:User) => !user.isDeleted);
  }
 
}
