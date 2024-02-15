import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickAddOnsComponent } from './pickAddOns.component';

describe('PickAddOnsComponent', () => {
  let component: PickAddOnsComponent;
  let fixture: ComponentFixture<PickAddOnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickAddOnsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PickAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
