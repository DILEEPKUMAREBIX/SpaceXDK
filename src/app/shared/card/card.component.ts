import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('card') card :any;
  
  
  constructor() { }

  ngOnInit(): void {
  }
  trackByFn(index, item) {    
    return item.id; 
 }
}
