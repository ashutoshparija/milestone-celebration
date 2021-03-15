import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingjsComponent } from './typingjs.component';

describe('TypingjsComponent', () => {
  let component: TypingjsComponent;
  let fixture: ComponentFixture<TypingjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypingjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
