import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';
import {USER_APIs} from '../../constants/api.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title,
              private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.title.setTitle('Home Page Title');
    this.httpClient.get(USER_APIs.user, {}).subscribe(response => {
      console.log(response);
    });
  }


}
