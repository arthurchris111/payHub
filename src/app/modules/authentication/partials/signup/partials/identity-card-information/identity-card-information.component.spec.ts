import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentityCardInformationComponent } from './identity-card-information.component';

describe('IdentityCardInformationComponent', () => {
  let component: IdentityCardInformationComponent;
  let fixture: ComponentFixture<IdentityCardInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentityCardInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdentityCardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
