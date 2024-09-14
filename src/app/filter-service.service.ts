import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  //Array of ganre from filter
  public filterSelect: Set<string> = new Set<string>();

  constructor() {}

  // Get unique genres from games
  getGenresFromGames(games: any[]): string[] {
    const genresSet = new Set<string>();
    games.forEach(game => genresSet.add(game.genre));
    return Array.from(genresSet);
  }

  // Toggle genre selection
  toggleGanreSelection(genre: string) {
    if (this.filterSelect.has(genre)) {
      this.filterSelect.delete(genre);
    } else {
      this.filterSelect.add(genre);
    }
  }

  // Return filtered games
  getFilteredGames(games: any[]) {
    if (this.filterSelect.size === 0) {
      return games;
    } else {
      return games.filter(game => this.filterSelect.has(game.genre));
    }
  }

  // Check if a genre is selected
  hasGenre(genre: string): boolean {
    return this.filterSelect.has(genre);
  }

  // Reset filters
  resetFilters() {
    this.filterSelect.clear();
  }
}
