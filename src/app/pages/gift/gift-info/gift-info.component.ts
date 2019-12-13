import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Gifts} from '../../../interfaces/gifts';
import {GiftsService} from '../../../services/request/gifts.service';
import {PeopleService} from '../../../services/request/people.service';

@Component({
    selector: 'app-gift-info',
    templateUrl: './gift-info.component.html',
    styleUrls: ['./gift-info.component.scss']
})
export class GiftInfoComponent implements OnInit {

    gifts: Gifts;

    constructor(private route: ActivatedRoute,
                private giftsService: GiftsService,
                private router: Router,
                private peopleService: PeopleService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            this.gifts = await this.giftsService.getGift(params.get('id'));
        });
    }

    public async delete(id) {
        this.route.paramMap.subscribe(async (params) => {
            await this.giftsService.delete((await this.giftsService.getGift(params.get('id')))[0]);
            await this.router.navigate(['/peoples/' + (await this.peopleService.getPeople(id))[0]._id + '/gifts']);
        });
    }

}
