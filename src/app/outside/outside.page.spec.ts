import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OutsidePage } from './outside.page';

describe('OutsidePage', () => {
  let component: OutsidePage;
  let fixture: ComponentFixture<OutsidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OutsidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
