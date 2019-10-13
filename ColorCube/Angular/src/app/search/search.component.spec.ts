import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { COLORS } from './__mock__/search.mock';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [SearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit null value when searchQuery is empty', () => {
    const searchQuery = '';
    const filterEmitter = spyOn(component.filteredColors, 'emit');
    component.filterColors(COLORS, searchQuery);
    expect(filterEmitter).toHaveBeenCalledWith(null);
  });

  it('should emit filtered colors', () => {
    const searchQuery = COLORS[0].name;
    const color = COLORS[0];
    const filterEmitter = spyOn(component.filteredColors, 'emit');
    component.filterColors(COLORS, searchQuery);
    expect(filterEmitter).toHaveBeenCalledWith([color]);
  });
});
