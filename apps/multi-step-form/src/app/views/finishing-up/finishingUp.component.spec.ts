import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinishingUpComponent } from './finishingUp.component';

describe('FinishingUpComponent', () => {
  let component: FinishingUpComponent;
  let fixture: ComponentFixture<FinishingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishingUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinishingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
