import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  @Input()
  gameType:string = ""
  
  @Input()
  gamePrince:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
