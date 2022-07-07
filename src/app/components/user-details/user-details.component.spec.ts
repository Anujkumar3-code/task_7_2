import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { UserStatusPipe } from 'src/app/pipes/user-status.pipe';
import { UserService } from 'src/app/services/user.service';

import { UserDetailsComponent } from './user-details.component';

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent , FullNamePipe, UserStatusPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
 
});
