import {Component, OnInit} from '@angular/core';
import {Gifts} from '../../../interfaces/gifts';
import {GiftsService} from '../../../services/request/gifts.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PeopleService} from '../../../services/request/people.service';

@Component({
    selector: 'app-gift-list',
    templateUrl: './gift-list.component.html',
    styleUrls: ['./gift-list.component.scss']
})
export class GiftListComponent implements OnInit {

    public gifts: Gifts[] = [];

    constructor(private giftsService: GiftsService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            this.gifts = await this.giftsService.getGifts(params.get('id'));
        });
    }

}
