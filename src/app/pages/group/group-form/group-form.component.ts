import {Component, OnInit} from '@angular/core';
import {Group} from '../../../interfaces/group';
import {ActivatedRoute} from '@angular/router';
import {GroupsService} from '../../../services/request/groups.service';

@Component({
    selector: 'app-group-form',
    templateUrl: './group-form.component.html',
    styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
    group: Group[] = [{} as Group];

    constructor(private route: ActivatedRoute, private groupsService: GroupsService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            const id = params.get('id');
            if (id) {
                this.group = await this.groupsService.getGroup(id);
            }
        });
    }

    handleGroup() {
        this.group[0]._id ? this.update() : this.add();
    }

    private async update() {
        await this.groupsService.update(this.group[0]);
    }

    private async add() {
        await this.groupsService.add(this.group[0]);
    }

}
