import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { GameListService } from '../game-list.service';
import { FilterService } from '../../app/filter-service.service';
import { FilterButtonsComponent } from '../filter-button/filter-button.component';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, FilterButtonsComponent],
  templateUrl: './side-nav.component.html',
  styleUrls: ['../../style/side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  title = 'game_menu';
  isExpanded = false;
  filterExpanded = false;
  faGamepad = faGamepad;
  games: any[] = [];
  genres: string[] = [];
  selectedGame: string | null = null;

  constructor(private gameListService: GameListService, public filterService: FilterService) {}

  //Load games
  ngOnInit(): void {
    this.games = this.gameListService.getGames();
  }

  //Main, first btn
  onButtonClickMenu() {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
      this.filterService.resetFilters();
      this.filterExpanded = false;
    }
  }

  //Filter btn, show ganres
  onButtonClickFilter() {
    this.filterExpanded = !this.filterExpanded;

    if (this.filterExpanded && this.genres.length === 0) {
      this.genres = this.filterService.getGenresFromGames(this.games);
    }
  }

  //switch ganre
  toggleGanreSelection(genre: string) {
    this.filterService.toggleGanreSelection(genre);
  }

  //show games acording to ganre
  getFilteredGames() {
    return this.filterService.getFilteredGames(this.games);
  }

  //display game
  gameSelection(game: { name: string }) {
    this.selectedGame = game.name;
  }
}
