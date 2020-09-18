import { Component, OnInit } from '@angular/core';
import { FlightSearchResultService } from '../services/flight-search-result.service'
import { Filters } from '../../app/shared/filters/filters';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  filter = Filters;
  selected_launch_year;
  selected_successful_launch;
  selected_successful_landing;
  land_success
  constructor(public flightService: FlightSearchResultService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  trackByFn(index, item) {
    return item.id;
  }

  filterData(type, value, index) {
    switch (type) {
      case "launch_year":
        if (this.selected_launch_year == value) {
          this.selected_launch_year = null;
        } else {
          this.selected_launch_year = value;
        }
        break;
      case "successful_launch":
        if (this.selected_successful_launch == value) {
          this.selected_successful_launch = null;
        } else {
          this.selected_successful_launch = value;
        }
        break;
      case "successful_landing":
        if (this.selected_successful_landing == value) {
          this.selected_successful_landing = null;
        } else {
          this.selected_successful_landing = value;
        }
      default:
      // code block
    }

    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        'launch_year': this.selected_launch_year,
        'launch_success': this.selected_successful_launch,
        'land_success': this.selected_successful_landing
      },
      queryParamsHandling: 'merge'
    });
  }
}
