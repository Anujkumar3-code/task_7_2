import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() {
    //'ManageComponent loaded.'
  }
  userPreview: any = null;
  allUsers: User[] = [];
  ngOnInit(): void {
    this.allUsers = UserService.usersList
  }
  
  showUser(id: string) {
    this.userPreview = UserService.usersList.find(user => user.id == id);
  }
}
