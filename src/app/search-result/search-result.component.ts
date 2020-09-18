import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FlightSearchResultService } from '../services/flight-search-result.service'

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
    launchList: any[] = [];
    constructor(public flightService: FlightSearchResultService, private route: ActivatedRoute) {
        this.route.queryParams.subscribe(queryParams => {
            this.filterLaunches(queryParams);
        });
    }

    filterLaunches(queryParams) {
        this.flightService.getLaunchData(queryParams).subscribe
            ((flights) => {
                this.launchList = flights;
            })
    }

    ngOnInit(): void {
        let queryParams = {};
        this.flightService.getLaunchData(queryParams).subscribe
            ((flights) => {
                this.launchList = flights;
            })
    }

    trackByFn(index, item) {
        return item.id;
    }
}
