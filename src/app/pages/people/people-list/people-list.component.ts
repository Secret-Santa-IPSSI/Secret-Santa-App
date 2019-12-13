import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../../../services/request/people.service';
import {People} from '../../../interfaces/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  public peoples: People[] = [];

  constructor(private peopleService: PeopleService) {
  }

  async ngOnInit() {
      this.peoples = await this.peopleService.getPeoples();
  }

}
