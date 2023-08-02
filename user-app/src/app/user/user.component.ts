import { Component, Input } from '@angular/core';
import { IUser } from '../models/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() User!: IUser;
}
