import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FlightSearchResultService {
    private flightUpdate = new Subject<any[]>();
    private flights: any[] = [];
    flightsList = [
        {
            "_id": "AI-01",
            "from_city_id": "Pune (PNQ)",
            "to_city_id": "New Delhi (DEL)",
            "title": "Air India",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-14",
            "endDate": "2018-03-15",
            "duration": "4h 10m",
            "price": 50
        },
        {
            "_id": "AI-02",
            "from_city_id": "Pune (PNQ)",
            "to_city_id": "New Delhi (IDR)",
            "title": "Air India",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-14",
            "endDate": "2018-03-15",
            "duration": "4h 10m",
            "price": 3361
        },
        {
            "_id": "IG-01",
            "from_city_id": "Pune (PNQ)",
            "to_city_id": "New Delhi (DEL)",
            "title": "Indigo",
            "depart": "8:20 AM",
            "arrive": "10:30 AM",
            "startDate": "2018-03-14",
            "endDate": "2018-03-15",
            "duration": "2h 10m",
            "price": 80
        },
        {
            "_id": "AI-03",
            "from_city_id": "Pune (PNQ)",
            "to_city_id": "New Delhi (BOM)",
            "title": "Air India",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-14",
            "endDate": "2018-03-15",
            "duration": "4h 10m",
            "price": 3361
        },
        {
            "_id": "AI-04",
            "from_city_id": "Indore (IDR)",
            "to_city_id": "New Delhi (BOM)",
            "title": "Air India",
            "depart": "8:20 AM",
            "arrive": "10:30 AM",
            "startDate": "2018-03-15",
            "endDate": "2018-03-16",
            "duration": "2h 10m",
            "price": 5739
        },
        {
            "_id": "AI-05",
            "from_city_id": "Indore (IDR)",
            "to_city_id": "New Delhi (PNQ)",
            "title": "Air India",
            "depart": "8:20 AM",
            "arrive": "10:30 AM",
            "startDate": "2018-03-15",
            "endDate": "2018-03-16",
            "duration": "2h 10m",
            "price": 5739
        },
        {
            "_id": "AI-06",
            "from_city_id": "Indore (IDR)",
            "to_city_id": "New Delhi (DEL)",
            "title": "Air India",
            "depart": "8:20 AM",
            "arrive": "10:30 AM",
            "startDate": "2018-03-15",
            "endDate": "2018-03-16",
            "duration": "2h 10m",
            "price": 5739
        },
        {
            "_id": "IG-02",
            "from_city_id": "Mumbai (BOM)",
            "to_city_id": "New Delhi (DEL)",
            "title": "IndiGo",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-18",
            "endDate": "2018-03-20",
            "duration": "4h 10m",
            "price": 4602
        },
        {
            "_id": "JA-01",
            "from_city_id": "Mumbai (BOM)",
            "to_city_id": "Pune (PNQ)",
            "title": "Jet Airways",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-15",
            "endDate": "2018-03-16",
            "duration": "4h 10m",
            "price": 2802
        },
        {
            "_id": "AI-07",
            "from_city_id": "Mumbai (BOM)",
            "to_city_id": "Indore (IDR)",
            "title": "Air India",
            "depart": "8:20 AM",
            "arrive": "10:30 AM",
            "startDate": "2018-03-15",
            "endDate": "2018-03-16",
            "duration": "2h 10m",
            "price": 5739
        },
        {
            "_id": "IG-03",
            "from_city_id": "New Delhi (DEL)",
            "to_city_id": "Indore (IDR)",
            "title": "IndiGo",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-18",
            "endDate": "2018-03-20",
            "duration": "4h 10m",
            "price": 4602
        },
        {
            "_id": "IG-04",
            "from_city_id": "New Delhi (DEL)",
            "to_city_id": "Mumbai (BOM)",
            "title": "IndiGo",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-18",
            "endDate": "2018-03-10",
            "duration": "4h 10m",
            "price": 4602
        },
        {
            "_id": "IG-05",
            "from_city_id": "New Delhi (DEL)",
            "to_city_id": "Mumbai (BOM)",
            "title": "IndiGo",
            "depart": "6:20 PM",
            "arrive": "10:30 PM",
            "startDate": "2018-03-18",
            "endDate": "2018-03-25",
            "duration": "4h 10m",
            "price": 4602
        }

    ]

    constructor() { }
    getSearchParam(departure: any, arrival: any, depDate: any, arrDate: any, pass_cont: number, dir: any) {

        this.flights = this.flightsList.filter(
            function (item) {
                return (item.from_city_id.includes(departure) && item.to_city_id.includes(arrival));
            }
        );

        this.flightUpdate.next([...this.flights])


    }

    updateSearchParam() {
        return this.flightUpdate.asObservable();
    }
}
