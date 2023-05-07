import { FormBuilder, FormsModule, NgForm } from '@angular/forms';

import { CadastroComponent } from './cadastro.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

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
let mockCepService: any;

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

it('should render title in a h2 tag', () => {
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h2').textContent).toContain('Dados do ');
  expect(compiled.querySelector('h2').textContent).toEqual('Dados do cadastro');
});

it('should call cadastrar method and show invalid message', () =>{
  var myForm: NgForm = <NgForm>{}
  spyOn(component, "cadastrar").and.callThrough();
  component.cadastrar(myForm);
  expect(component.cadastrar).toHaveBeenCalled();
});
/*
it('should call cadastrar method and show valid message', () =>{
  var myForm: NgForm = <NgForm>{
    //obj
  }
  spyOn(component, "cadastrar").and.callThrough();
  component.cadastrar(myForm);
  expect(component.cadastrar).toHaveBeenCalled();
});
*/



it('should have a label with class campo__etiqueta for the nome field', () => {
  // Arrange and Assert
  const elem = fixture.debugElement.query(By.css('.campo__etiqueta'));
  expect(elem).toBeTruthy();
  expect(elem.nativeElement.getAttribute('for')).toEqual('nome');
});

it('should have a input with id nascimento with the type date', () => {
  // Arrange and Assert
  const elem = fixture.debugElement.query(By.css('#nascimento'));
  expect(elem).toBeTruthy();
  expect(elem.nativeElement.getAttribute('type')).toEqual('date');
});


it('should have a label with class campo__etiqueta for the email field', () => {
  // Arrange and Assert
  const elem = fixture.debugElement.query(By.css('#thebestemail'));
  expect(elem).toBeTruthy();
  expect(elem.nativeElement.innerText).toEqual('Preencha com seu melhor E-mail');
});


});