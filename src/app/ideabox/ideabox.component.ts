import { Component, OnInit } from '@angular/core';


import { Ideabox } from './ideabox';
import {IdeaboxService} from './ideabox.service';

@Component({
  selector: 'app-root',
  templateUrl: './ideabox.component.html',
  styleUrls: ['./ideabox.component.scss']
})
export class AppComponent implements OnInit {
  idea: Ideabox[];
  error = '';
  success = '';

  constructor(private ideaboxService: IdeaboxService) {
  }

  ngOnInit() {
    this.getIdeas();
  }

  getIdeas(): void {
    this.ideaboxService.getAll().subscribe(
      (res: Ideabox[]) => {
        this.idea = res;
      }, (err) => {
        this.error = err;
      }
    );
  }
}


