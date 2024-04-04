import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSoldaduraComponent } from './editar-soldadura.component';

describe('EditarSoldaduraComponent', () => {
  let component: EditarSoldaduraComponent;
  let fixture: ComponentFixture<EditarSoldaduraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarSoldaduraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarSoldaduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
