import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bbb:any;
  people:any;

  constructor(private api:ApiService) { }

  ngOnInit() {

    this.api.handleSearch()

  }

}
