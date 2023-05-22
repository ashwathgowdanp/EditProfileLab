import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../user-profile';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  profileForm!: FormGroup;
  userProfile!: UserProfile;

  constructor(private profileService: ProfileService, private formBuilder:FormBuilder) {  
  }
  
  
  ngOnInit(): void {
    this.userProfile = this.profileService.getUserProfile();

    this.profileForm = this.formBuilder.group({
      name: [this.userProfile.name, Validators.required],
      contact: [this.userProfile.contact, Validators.required],
      bio: [this.userProfile.bio]
    });
  }
  onSubmit(): void {
    if (this.profileForm.valid) {
      const updatedProfile: UserProfile = {
        name: this.profileForm.value.name,
        contact: this.profileForm.value.contact,
        bio: this.profileForm.value.bio
      };

      this.profileService.setUserProfile(updatedProfile);
    }
  }
}


  
  
  