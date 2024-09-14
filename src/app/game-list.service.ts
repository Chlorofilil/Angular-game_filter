import { Injectable } from '@angular/core';

interface Game {
  id: number;
  name: string;
  genre: string;
}

@Injectable({
  providedIn: 'root'
})

export class GameListService {
  
  private games: Game[] = [
    { id: 1, name: 'The Witcher 3: Wild Hunt', genre: 'RPG' },
    { id: 2, name: 'Minecraft', genre: 'Sandbox' },
    { id: 3, name: 'Overwatch', genre: 'FPS' },
    { id: 4, name: 'Stardew Valley', genre: 'Simulation' },
    { id: 5, name: 'Celeste', genre: 'Platformer' },
    { id: 6, name: 'Hades', genre: 'Rogue-like' },
    { id: 7, name: 'Among Us', genre: 'Party' },
    { id: 8, name: 'Hollow Knight', genre: 'Metroidvania' },
    { id: 9, name: 'Valorant', genre: 'Tactical Shooter' },
    { id: 10, name: 'Fortnite', genre: 'Battle Royale' }
  ];

  //load games
  getGames():  Game[] {
    return this.games;
  }
}
