import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultaCepService: ConsultaCepService) { }

  ngOnInit(): void {}

  cadastrar(form : NgForm){
     console.log(form);
     if(form.valid){
       this.router.navigate(['./sucesso']);
       console.log('Formulário enviado');
     }else{
       console.log('Formulário inválido');
     }
    //console.log(form.controls)
  }

  consultaCep(ev: any, formulario: NgForm){
    const cep = ev.target.value
    if(cep !== ''){
      this.consultaCepService.getConsultaCep(cep).subscribe(resultado => {
        console.log(resultado);
        this.populandoEndereco(resultado, formulario);
      })
    }
  }

  populandoEndereco(dados: any, formulario: NgForm){
    console.log('entrou no populando com: ', dados, formulario)
    formulario.form.patchValue({
      // cidade definido no Frontend e dados.localidade representa cidade que vem do Backend API
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

}
