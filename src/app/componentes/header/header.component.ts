import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
