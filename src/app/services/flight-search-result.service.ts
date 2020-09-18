import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class FlightSearchResultService {
    launchUrl = environment.launchUrl;
    launchUpdate = new Subject<any[]>();
    private subject = new Subject<any>();
    public queryParams;

    constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

    getLaunchData(queryParams): Observable<any> {
        let paramString = "";
        if (queryParams['launch_year'] != undefined && queryParams['launch_year'].length>0) {
            paramString += "&launch_year=" + queryParams['launch_year'];
        }
        if (queryParams['launch_success'] != undefined && queryParams['launch_success'].length>0) {
            paramString += "&launch_success=" + queryParams['launch_success'];
        }

        if (queryParams['land_success'] != undefined && queryParams['land_success'].length>0) {
            paramString += "&land_success=" + queryParams['land_success'];
        }
        return this.httpClient.get(this.launchUrl + paramString)
    }
}
