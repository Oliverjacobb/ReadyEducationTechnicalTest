import { startWith, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../models/iuser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  @Input() Users: IUser[] =[];
  SearchBox = new FormControl();
  SearchedUsers: IUser[] = [];
  @Output() UserSelected = new EventEmitter<IUser>;
  FullUsers: IUser[] = [];
  @Output() ResetUsers = new EventEmitter<IUser[]>;

  ngOnInit() {

    this.FullUsers = this.Users;

    this.SearchBox.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      filter(value => typeof value === 'string')
    ).subscribe(value => this.filterUsers(value))
  }

  filterUsers(q: string): void {
    if(q.length === 0) {
     this.SearchedUsers = [];
     return;
    }
 
    q = q.toLowerCase();
 
    this.SearchedUsers = this.Users.filter(u => u.name.first.toLowerCase().includes(q) || u.name.last.toLowerCase().includes(q) || u.location.country.toLowerCase().includes(q));
  }

  getUserName(user: IUser): string {
    return user ? `${user.name.first} ${user.name.last}` : '';
  }

  selectUser(user: IUser): void {
    this.UserSelected.emit(user);
  }
  
  resetUserList(): void {
    this.SearchBox.setValue('');
    this.Users = this.FullUsers;
    this.ResetUsers.emit(this.FullUsers);
  }
}
