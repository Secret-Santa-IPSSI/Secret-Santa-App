import {Component, OnInit} from '@angular/core';
import {Group} from '../../../interfaces/group';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../../services/request/groups.service';
import {PeopleService} from '../../../services/request/people.service';

@Component({
    selector: 'app-group-info',
    templateUrl: './group-info.component.html',
    styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

    group: Group;

    constructor(private route: ActivatedRoute,
                private groupsService: GroupsService,
                private peopleService: PeopleService,
                private router: Router) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            this.group = await this.groupsService.getGroup(params.get('id'));
        });
    }

    public async delete() {
        await this.groupsService.delete(this.group[0]);
        await this.router.navigate(['/groups']);
    }

    public async randomize() {
        await this.groupsService.randomize(this.group[0]);
        window.location.reload();
    }

    public async deleteUser(id) {
        await this.peopleService.delete(await this.peopleService.getPeople(id));
        window.location.reload();
    }

}
