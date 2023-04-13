import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMainStoreComponent } from './books-main-store.component';

describe('BooksMainStoreComponent', () => {
  let component: BooksMainStoreComponent;
  let fixture: ComponentFixture<BooksMainStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMainStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksMainStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
