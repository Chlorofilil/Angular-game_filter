import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNavComponent } from './side-nav.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule], // Importovať všetky moduly potrebné pre testovanie
      declarations: [SideNavComponent] // Deklarovať komponent
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Spúšťa zmenu detekcie, aby sa aktualizovali všetky zmeny v šablóne
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Overiť, že komponent sa vytvoril úspešne
  });

  it('should render the FontAwesome icon', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('fa-icon')?.textContent).toContain('coffee'); // Overiť, že ikona sa vykresľuje správne
  });
});

