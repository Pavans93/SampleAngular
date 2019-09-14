import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  resp: any
  car: any
  outputfromChild: any

  constructor(private router: Router, private dataService: DataService, ) { }

  async ngOnInit() {
    /* this.resp = {
      cars: [
        { name: "omini 1", model: 2019, price: "5lk" },
        { name: "omini 2", model: 2019, price: "5lk" },
        { name: "omini 3", model: 2019, price: "5lk" },
        { name: "omini 4", model: 2019, price: "5lk" }
      ],
      bikes: [
        { name: "suzuki 1", model: 2019, price: "1lk" },
        { name: "suzuki 2", model: 2019, price: "2lk" },
        { name: "suzuki 3", model: 2019, price: "5lk" },
        { name: "suzuki 4", model: 2019, price: "5lk" }
      ]
    } */

    // this.resp = JSON.parse('{"cars":[{"name":"omini 1","model":2019,"price":"5lk"},{"name":"omini 2","model":2019,"price":"5lk"},{"name":"omini 3","model":2019,"price":"5lk"},{"name":"omini 4","model":2019,"price":"5lk"}],"bikes":[{"name":"suzuki 1","model":2019,"price":"1lk"},{"name":"suzuki 2","model":2019,"price":"2lk"},{"name":"suzuki 3","model":2019,"price":"5lk"},{"name":"suzuki 4","model":2019,"price":"5lk"}]}')

    /* this.resp =await  this.dataService.getJsonDataPromise() */

    await this.dataService.getJsonDataSubscribe().subscribe((resp) => {
      console.log(resp)
      this.resp = resp

      for (const [index, value] of this.resp.cars.entries()) { 
        console.log(index, value) 
      }


    })

  }

  /* 
  
  
a= {a:1,b:1}
  {a: 1, b: 1}
b= {c:1,d:1}
  {c: 1, d: 1}


const aa =Object.keys(a)

aa.forEach((key)=>{
  if(!b.hasOwnProperty(key)){
    b[key]=a[key]
  }
})
    
*/

  selectedCar(car) {
    this.car = car
  }

  navigateCar(car) {
    this.router.navigate(['/third', car])
  }

  valueChanged($event) {
    this.outputfromChild = $event.year
    console.log($event)
  }

}
