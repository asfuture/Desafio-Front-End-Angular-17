import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MenuComponent } from '../menu/menu.component';
import { BlocoList } from '../../interface/card-bloco';
import { BlocoService } from '../../service/bloco.service';
import { Router } from '@angular/router';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-card-bloco',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, MenuComponent],
  templateUrl: './card-bloco.component.html',
  styleUrls: ['./card-bloco.component.css']
})
export class CardBlocoComponent implements OnInit {

  cardBloco: BlocoList[] = []; 
  erroNaRequisicao = false;
  mensagemErro = '';

  constructor(
    private blocoService: BlocoService,
    private router:Router
  ) {}

  ngOnInit(): void {
    //this.buscarBlocos();
  }

  buscarBlocos(valoresSelecionados: string[]) {
    this.blocoService.buscarConjuntos(valoresSelecionados)
    .subscribe(
      (response) => {
        this.cardBloco = response as BlocoList[];
        console.log('valor do cardBloco',this.cardBloco)
      },
        (error) => {
          console.error('Erro ao buscar blocos:', error);
          this.erroNaRequisicao = true;
          this.mensagemErro = 'Ocorreu um erro ao buscar os blocos. Por favor, tente novamente mais tarde.';
        }
      );
    }
}
