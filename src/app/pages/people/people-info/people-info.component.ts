import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../../../services/request/people.service';
import {People} from '../../../interfaces/people';

@Component({
    selector: 'app-people-info',
    templateUrl: './people-info.component.html',
    styleUrls: ['./people-info.component.scss']
})
export class PeopleInfoComponent implements OnInit {

    people: People;

    constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            this.people = await this.peopleService.getPeople(params.get('id'));
        });
    }

    public async delete() {
        await this.peopleService.delete(this.people);
        await this.router.navigate(['/peoples']);
    }

}
