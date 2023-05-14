import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 
  constructor(){}
 
  ngOnInit(): void {
    
  }

/* input is for passing a data from parent to child here we have 2 ways to do it
   with an alias for exple total or without alias as like line 18 and 19 
   verify the custom binding in the parent (resumes.html)*/ 

 @Input('total') all:number =0;
 @Input() junior:number=0;
 @Input() senior:number =0;


 selectedRadioButtonValue:string='All';
 
 @Output()
 filterRadioButtonSelectionChanged:EventEmitter<string> = new EventEmitter<string>();

 onRadioButtonSelectionChanged(){
  this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
  console.log(this.selectedRadioButtonValue)
 }

}
