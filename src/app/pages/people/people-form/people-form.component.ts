import {Component, OnInit} from '@angular/core';
import {People} from '../../../interfaces/people';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../../../services/request/people.service';

@Component({
    selector: 'app-people-form',
    templateUrl: './people-form.component.html',
    styleUrls: ['./people-form.component.scss']
})
export class PeopleFormComponent implements OnInit {
    people: People[] = [{} as People];

    constructor(private route: ActivatedRoute, private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            const id = params.get('id');
            if (id) {
                this.people = await this.peopleService.getPeople(id);
            }
        });
    }

    handlePeople() {
        this.people[0]._id ? this.update() : this.add();
    }

    private async update() {
        await this.peopleService.update(this.people[0]);
    }

    private async add() {
        await this.peopleService.add(this.people[0]);
    }

}
