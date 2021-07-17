import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input()
  listProductchild: any;
  @Output()
  updateProd = new EventEmitter<number>();
  @Output()
  deleteProd = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {


  }
  onUpdate(i: number) {
    this.updateProd.emit(i);
  }
  onDelete(i: number) {
    this.deleteProd.emit(i);
  }
}
