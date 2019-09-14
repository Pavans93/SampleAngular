import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  /* @Input() car:any */
    car :any

  @Output() changeValue = new EventEmitter();


  constructor(private route:ActivatedRoute){
    route.params.subscribe(params=>{
      this.car = params
    })
  }

  stockValueChanged() {
    this.changeValue.emit({year:this.car.model});
  }


  ngOnInit() {
  }

}
