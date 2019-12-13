import {Component, OnInit} from '@angular/core';
import {Group} from '../../../interfaces/group';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupsService} from '../../../services/request/groups.service';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {

  group: Group;

  constructor(private route: ActivatedRoute, private groupsService: GroupsService, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(async (params) => {
      this.group = await this.groupsService.getGroup(params.get('id'));
    });
  }

  public async delete() {
    await this.groupsService.delete(this.group);
    await this.router.navigate(['/groups']);
  }

}
