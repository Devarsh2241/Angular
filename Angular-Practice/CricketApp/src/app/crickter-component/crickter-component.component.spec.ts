import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickterComponentComponent } from './crickter-component.component';

describe('CrickterComponentComponent', () => {
  let component: CrickterComponentComponent;
  let fixture: ComponentFixture<CrickterComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrickterComponentComponent]
    });
    fixture = TestBed.createComponent(CrickterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
