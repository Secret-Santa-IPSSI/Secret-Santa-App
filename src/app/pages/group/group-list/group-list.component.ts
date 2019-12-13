import {Component, OnInit} from '@angular/core';
import {GroupsService} from '../../../services/request/groups.service';
import {Group} from '../../../interfaces/group';

@Component({
    selector: 'app-group-list',
    templateUrl: './group-list.component.html',
    styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

    public groups: Group[] = [];

    constructor(private groupsService: GroupsService) {
    }

    async ngOnInit() {
        this.groups = await this.groupsService.getGroups();
    }

}
