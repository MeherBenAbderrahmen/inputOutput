import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  submitted = false;
  showUpdateButton=false;
  index: any;
  productForm = new FormGroup({
    nomProduit: new FormControl('', Validators.required),
    descProduit: new FormControl('', Validators.required)
  })
  listProduct: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addProduct() {
    this.submitted = true;
    if (this.productForm.valid) {
      this.listProduct.push(this.productForm.value);
      this.submitted = false;
      this.productForm.reset();
    }
  }
  deleteProd(i: number) {
    this.listProduct.splice(i, 1);
  }
  updateProd(i: number) {
    this.index=i;
    this.showUpdateButton=true;
        this.productForm.patchValue(this.listProduct[i]);
  }
  saveUpdateProd(){
    this.submitted=true;
    if (this.productForm.valid) {
      this.listProduct.splice(this.index,1,this.productForm.value);
      this.submitted = false;
      this.productForm.reset();
      this.showUpdateButton=false;
    }
    
  }
  resetForm(){
    this.productForm.reset();
  }
}
