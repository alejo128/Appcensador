import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders }from '@angular/common/http';

import { Item } from '../../models/item';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Direccion 1",
    "about": "Calle 7 #81-49",
    "detalle": "Ed Alizares apto 1280"
  };

  constructor(private http : HttpClient) {    
    let items = [
      {
        "name": "Direccion 1",
        "about": "Calle 7 #81-49",
        "detalle": "Ed Alizares apto 1280"
      },
      {
        "name": "Direccion 2",
        "about": "Calle 7 #81-90",
        "detalle": "Ed cantabria plaza apto 1020"
      },
      {
        "name": "Direccion 3",
        "about": "algo",
        "detalle": "algo"
      },
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }
  query(params?: any) {
    if (!params) {
      return this.items;
    }
    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }
  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  getUbicacion(){
    console.log(this.http.get("http://localhost:3000/ubications"));
    return this.http.get("http://localhost:3000/ubications");
   }
}
