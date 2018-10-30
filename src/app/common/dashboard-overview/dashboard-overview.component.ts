import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {

  constructor(private httpService: HttpClient) { }

  arrStud:  string [];
  ngOnInit() {
    this.httpService.get('src/assets/stud.json').subscribe(
      data => {
        this.arrStud = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrStud);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
