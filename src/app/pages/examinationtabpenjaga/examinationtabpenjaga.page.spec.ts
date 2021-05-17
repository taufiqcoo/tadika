import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExaminationtabpenjagaPage } from './examinationtabpenjaga.page';

describe('ExaminationtabpenjagaPage', () => {
  let component: ExaminationtabpenjagaPage;
  let fixture: ComponentFixture<ExaminationtabpenjagaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExaminationtabpenjagaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExaminationtabpenjagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
