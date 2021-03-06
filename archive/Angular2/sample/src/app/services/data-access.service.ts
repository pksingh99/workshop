import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DataAccessService {

  constructor(private http:Http) { }

    getDinosaursFromApi(): Promise<any>{
      return this.http.get("http://localhost:3000/dinosaurs")
        .map((r:Response) => r.json())
        .toPromise();
        
    }

    getDinosaursFromApiByName(name): Promise<any>{
      return this.http.get(`http://localhost:3000/dinosaurs?name=${name}`)
        .map((r:Response) => r.json())
        .toPromise();
        
    }

    getDinosaurs(): Array<any>{
    return [
        {
            "name": "bruhathkayosaurus",
            "appeared": -70000000,
            "height": 25,
            "length": 44,
            "order": "saurischia",
            "vanished": -70000000,
            "weight": 135000
        },
        {
            "name": "lambeosaurus",
            "appeared": -76000000,
            "height": 2.1,
            "length": 12.5,
            "order": "ornithischia",
            "vanished": -75000000,
            "weight": 5000
        },
        {
            "name": "linhenykus",
            "appeared": -85000000,
            "height": 0.6,
            "length": 1,
            "order": "theropoda",
            "vanished": -75000000,
            "weight": 3
        },
        {
            "name": "pterodactyl",
            "appeared": -150000000,
            "height": 0.6,
            "length": 0.8,
            "order": "pterosauria",
            "vanished": -148500000,
            "weight": 2
        },
        {
            "name": "stegosaurus",
            "appeared": -155000000,
            "height": 4,
            "length": 9,
            "order": "ornithischia",
            "vanished": -150000000,
            "weight": 2500
        },
        {
            "name": "triceratops",
            "appeared": -68000000,
            "height": 3,
            "length": 8,
            "order": "ornithischia",
            "vanished": -66000000,
            "weight": 11000
        }
    ];

  }

}
