import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {


private urlLocalidades = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

consultaUFs(){


  return this.http.get(this.urlLocalidades);
}

}
