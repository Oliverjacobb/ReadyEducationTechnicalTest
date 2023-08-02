import { Component } from '@angular/core';
import { IUser } from './models/iuser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';
  Users: IUser[] = [
    { 
      name: { first: "John", last: "Doe", title: "Mr/Ms" },
      picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/1.jpg" },
      location: { city: "New York" } 
    },
    {
      name: { first: "Alice", last: "Smith", title: "Mr/Ms" },
      picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/2.jpg" },
      location: { city: "Los Angeles" }
    },
    {
      name: { first: "Michael", last: "Johnson", title: "Mr/Ms" },
      picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/3.jpg" },
      location: { city: "Chicago" }
    },
    {
      name: { first: "Emily", last: "Williams", title: "Mr/Ms" },
      picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/women/4.jpg" },
      location: { city: "Houston" }
    },
    {
      name: { first: "Daniel", last: "Brown", title: "Mr/Ms" },
      picture: { thumbnail: "https://randomuser.me/api/portraits/thumb/men/5.jpg" },
      location: { city: "San Francisco" }
    }
  ];  
}
