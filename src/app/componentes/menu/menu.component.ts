import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { BlocoService } from '../../service/bloco.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule,MatFormFieldModule,MatSelectModule,MatInputModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  valorBlock!: FormGroup;
  @Output() buscarEvent = new EventEmitter<string[]>();
  constructor(
    private formBuilder:FormBuilder,
    private blocoService: BlocoService
    ){}

 ngOnInit(): void {
     this.valorBlock = this.formBuilder.group({
      name:[''],
      selection:['']
     })
 }
 buscar() {
  const name = this.valorBlock.get('name')!.value;
  const selection = this.valorBlock.get('selection')!.value;
  console.log('O valor do bloco é ', selection, 'O nome é ', name);

  const valoresSelecionados = [name, selection]; // Coloque os valores selecionados em um array
  this.buscarEvent.emit(valoresSelecionados); // Emite o evento com os valores selecionados

  // Chame o serviço para realizar a busca na API com base nos valores selecionados
  this.blocoService.buscarConjuntos(valoresSelecionados)
    .subscribe(
      (response) => {
        console.log('teste menu')
        // Lide com a resposta da API aqui, se necessário
      },
      (error) => {
        console.error('Erro ao buscar blocos:', error);
        // Lide com o erro aqui, se necessário
      }
    );
 }

}
