import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Canzoni } from './models/song.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'verifica';
  @Input() canzone! : Canzoni
  http! : HttpClient
  obs! : Observable <object>
  data! : object
  loading! : boolean
  vettCanzoni : Canzoni[] = []

  construcor(http : HttpClient){
    this.http = http
  }
  Richiesta(){
    this.loading = true
    this.obs = this.http.get('https://my-json-server.typicode.com/malizia-g/hotel/short-songlist')
    this.obs.subscribe(this.getData)
  }
  getData = (d : object) => {
    this.data = d
    this.loading = false
    console.log(this.data)
  }
  ngOnInit(): void {
    this.Richiesta()
  }
  
}
