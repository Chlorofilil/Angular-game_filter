import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: '../../style/footer.component.css'
})
export class FooterComponent {
  year: number = new Date().getFullYear();
}
