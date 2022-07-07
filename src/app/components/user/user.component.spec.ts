import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullNamePipe } from 'src/app/pipes/full-name.pipe';
import { UserStatusPipe } from 'src/app/pipes/user-status.pipe';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent, FullNamePipe, UserStatusPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
