import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdOnComponent } from './ad-on.component';

describe('AdOnComponent', () => {
  let component: AdOnComponent;
  let fixture: ComponentFixture<AdOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdOnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
