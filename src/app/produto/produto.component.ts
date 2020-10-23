import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 
  
  

  constructor(private produtoservice : ProdutoService) {}
  localidades: Observable<any>;
  
  ngOnInit(): void {
    
    
      
      this.localidades = this.produtoservice.consultaUFs();
    
  }
    
}
