import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from './Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameListService {
  //Local "api"
  private _url: string = "assets/data/game-list.json";

  constructor(private http: HttpClient) {}
  
  //load games
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this._url);
  }
}
