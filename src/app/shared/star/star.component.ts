import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ci-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() public rating: number = 5;
  @Output() public ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  public starWidth: number = 75;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5 ;
    console.log(this.starWidth);
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
