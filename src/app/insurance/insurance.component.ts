import { Component, OnInit } from '@angular/core';
import {MatButtonModule, MatCheckboxModule,MatFormFieldModule,MatInputModule } from '@angular/material';


@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
public  insurArray:any=["a1","a2","a3"];

  constructor() { }

  ngOnInit() {
  }

}
