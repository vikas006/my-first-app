import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  constructor(private title: Title) {
  }

  ngOnInit(): void {
    this.title.setTitle('Test Page Title');
  }

}
