import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorManagementComponent } from './color-management.component';
import { ColorCubeService } from '../color-cube/color-cube.service';
import { Router, ActivatedRoute } from '@angular/router';
import { COLOR } from './__mock__/color-management.mock';
import { of, noop, throwError } from 'rxjs';
import { FormsModule, NgForm } from '@angular/forms';
import { DialogTestingComponent } from '../dialog/__mock__/dialog.mock';

describe('ColorManagementComponent', () => {
  let component: any;
  let fixture: ComponentFixture<ColorManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ColorManagementComponent, DialogTestingComponent],
      providers: [
        {
          provide: ColorCubeService,
          useValue: {
            getColor: () => of(COLOR),
            createColor: () => of({}),
            editColor: () => of({})
          }
        },

        {
          provide: Router,
          useValue: {
            navigate: noop
          }
        },

        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => COLOR.id
              }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorManagementComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a new color', () => {
    const colorName = 'White';
    const color = '#FFF';
    const errorResponse = { error: 'Mock Error', status: 500 };
    const router = spyOn(component.router, 'navigate').and.callThrough();
    const consoleError = spyOn(console, 'error').and.callThrough();
    const redirectUrl = '/list';

    spyOn(component.colorCubeService, 'createColor').and.returnValues(
      of({}),
      throwError(errorResponse)
    );

    // On Success
    component.submitNewColor(colorName, color);
    expect(router).toHaveBeenCalledWith([redirectUrl]);

    // On Error

    component.submitNewColor(colorName, color);
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
  });

  it('should edit color', () => {
    const colorName = 'Cinza';
    const colorId = 3;
    const color = '#AFA';
    const errorResponse = { error: 'Mock Error', status: 500 };
    const router = spyOn(component.router, 'navigate').and.callThrough();
    const consoleError = spyOn(console, 'error').and.callThrough();
    const redirectUrl = '/list';

    spyOn(component.colorCubeService, 'editColor').and.returnValues(
      of({}),
      throwError(errorResponse)
    );

    component.submitEditedColor(colorId, colorName, color);
    expect(router).toHaveBeenCalledWith([redirectUrl]);

    component.submitEditedColor(colorId, colorName, color);
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
  });

  it('should call function to submit new color', () => {
    const form: NgForm = {
      value: COLOR
    } as NgForm;
    const newColorFN = spyOn(component, 'submitNewColor');
    const { name, color } = COLOR;

    component.isNewColor = true;
    component.onSubmit(form);
    expect(newColorFN).toHaveBeenCalledWith(name, color);
  });

  it('should call function to submit edited color', () => {
    const form: NgForm = {
      value: COLOR
    } as NgForm;
    const newColorFN = spyOn(component, 'submitEditedColor');
    const { id, name, color } = COLOR;
    component.isNewColor = false;
    component.id = id;
    component.onSubmit(form);
    expect(newColorFN).toHaveBeenCalledWith(id, name, color);
  });
});
