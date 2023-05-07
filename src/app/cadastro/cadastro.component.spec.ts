import { FormBuilder, FormsModule, NgForm } from '@angular/forms';

import { CadastroComponent } from './cadastro.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('CadastroComponent', () => {
/*
  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    let control = component.form.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
*/

let component: CadastroComponent;
let fixture: ComponentFixture<CadastroComponent>;
let mockCepService;

beforeEach(async () => {
    mockCepService = jasmine.createSpyObj(['get']);
    await TestBed.configureTestingModule({
        imports: [ FormsModule ],
        declarations: [ CadastroComponent ],
        providers:[
            { provide: ConsultaCepService, useValue: mockCepService }
    ],
    schemas: [NO_ERRORS_SCHEMA]
  })
  .compileComponents();

  fixture = TestBed.createComponent(CadastroComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});

});