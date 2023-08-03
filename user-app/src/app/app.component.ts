import { Component, OnInit } from '@angular/core';
import { IUser } from './models/iuser';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'user-app';
  Users: IUser[] = [];
  SearchedUsers: IUser[] = [];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.GetUsers().subscribe(users => {this.Users = users.results});
  }

  selectUser(user: IUser): void {
    this.Users = [user];
  }

  resetUsers(users: IUser[]): void {
    this.Users = users;
  }
}
