import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CardsList } from '../../interface/card-bloco';
import { BlocoService } from '../../service/bloco.service';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent,MatButtonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards: CardsList[] = [];
  
  
  constructor(private blocoService: BlocoService, private router: Router) { }
   //this.extractCreatureCards(response);
  buscarCartas() {
    // Chame o serviço BlocoService para buscar os dados das cartas
    this.blocoService.buscarCartasColecao()
      .subscribe(
        (response) => {
          // Atualize a lista de cartas com os dados recebidos da API
          this.cards = response;
        },
        (error) => {
          console.error('Erro ao buscar cartas:', error);
          // Trate o erro, se necessário
        }
      );
  }

  voltar() {
    this.router.navigate(['home']);
  }
}
