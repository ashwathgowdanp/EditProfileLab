import { Injectable } from '@angular/core';
import { UserProfile } from './user-profile';



@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Ashwath',
    contact: 'Ashwath@gmail.com',
    bio: 'Software Engineer'
  };

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  setUserProfile(profile: UserProfile): void {
    this.userProfile = profile;
  }
}
