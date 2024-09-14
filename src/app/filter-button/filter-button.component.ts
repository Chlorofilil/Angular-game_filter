import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button *ngFor="let genre of genres"
            class="filter-btn-style btn"
            (click)="onToggleGenre(genre)"
            [ngClass]="{'active': isSelected(genre)}">
      {{ genre }}
    </button>
  `,
  styleUrls: ['../../style/side-nav.component.css']
})
export class FilterButtonsComponent {
  @Input() genres: string[] = [];
  @Input() selectedGenres: Set<string> = new Set<string>();
  @Output() toggleGenre = new EventEmitter<string>();

  onToggleGenre(genre: string) {
    this.toggleGenre.emit(genre);
  }

  isSelected(genre: string): boolean {
    return this.selectedGenres.has(genre);
  }
}
