import { Component, Input } from '@angular/core';
import { IUser } from '../models/iuser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  @Input() User!: IUser;

  openGoogleMaps(): void {
    const googleMapsUrl = `https://www.google.com/maps?q=${this.User.location.coordinates.latitude},${this.User.location.coordinates.longitude}`;
    window.open(googleMapsUrl, '_blank');
  }

  get retrieveTimeZoneToolTip() : string {
    const [hours, minutes] = this.User.location.timezone.offset.split(":");
    const offsetHours = parseInt(hours);
    const offsetMinutes = parseInt(minutes);
  
    const currentTime = new Date();
    currentTime.setUTCHours(currentTime.getUTCHours() + offsetHours);
    currentTime.setUTCMinutes(currentTime.getUTCMinutes() + offsetMinutes);
  
    const timeString = currentTime.toUTCString().slice(-12, -4);
  
    return `The current time in the users timezone of ${this.User.location.timezone.description} is ${timeString}.`;
  }
}
