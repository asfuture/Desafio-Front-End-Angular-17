import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBlocoComponent } from './card-bloco.component';

describe('RealiseComponent', () => {
  let component: CardBlocoComponent;
  let fixture: ComponentFixture<CardBlocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBlocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardBlocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
