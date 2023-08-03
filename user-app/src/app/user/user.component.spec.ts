import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip'
import { IUser } from '../models/iuser';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  const mockUser: IUser = {
    name: {
      first: 'John',
      last: 'Doe',
      title: 'Mr',
    },
    picture: {
      medium: 'https://example.com/john_doe.jpg',
    },
    location: {
      street: {
        number: 123,
        name: 'Main Street',
      },
      city: 'Cityville',
      state: 'Stateland',
      country: 'Countryland',
      postcode: '12345',
      coordinates: {
        latitude: '123.456',
        longitude: '789.012',
      },
      timezone: {
        offset: '+05:00',
        description: 'Eastern Standard Time',
      },
    },
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    cell: '987-654-3210',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [MatIconModule, MatTooltipModule]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    component.User = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
