import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevExtremeModule } from 'devextreme-angular';

import { DataGridComponent } from './datagrid.component';

describe('DatagridComponent', () => {
  let component: DataGridComponent;
  let fixture: ComponentFixture<DataGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridComponent ],
      imports: [DevExtremeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
