import { TestBed } from '@angular/core/testing';

import { ConsultaCepService } from './consulta-cep.service';
import { of } from 'rxjs';

describe('ConsultaCepService', () => {
  let service: ConsultaCepService, mockHttp: any;
/*
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get'])
    service = new ConsultaCepService(mockHttp)
  })

  describe('getCep', () => {
    it('shold call cep', () =>{
      const cep = '01001000'
      mockHttp.get.and.returnValue(of(false));
      service.getConsultaCep(cep);
      expect(mockHttp.get).toHaveBeenCalledWith(`https://viacep.com.br/ws/${cep}/json`);
    })
  })
});
