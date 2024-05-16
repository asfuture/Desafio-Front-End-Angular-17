import { Routes } from '@angular/router';
import { CardsComponent } from './componentes/cards/cards.component';
import { CardBlocoComponent } from './componentes/card-bloco/card-bloco.component';

export const routes: Routes = [
    {
        path:'', component: CardBlocoComponent, 
    },
    {
        path:'home', component: CardBlocoComponent, 
    }
    ,
    {
        path:'cards', component: CardsComponent, 
    }
    
];
