import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ci-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() public rating = 5;
  @Output() public ratingClicked = new EventEmitter<string>();

  public starWidth = 75;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
