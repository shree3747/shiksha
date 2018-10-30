import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private httpService: HttpClient) { 

  }

  // arrStud:  string [];
  ngOnInit() {
    // this.httpService.get('src/assets/stud.json').subscribe(
    //   data => {
    //     this.arrStud = data as string [];	 // FILL THE ARRAY WITH DATA.
    //      console.log(this.arrStud);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
  }

}
