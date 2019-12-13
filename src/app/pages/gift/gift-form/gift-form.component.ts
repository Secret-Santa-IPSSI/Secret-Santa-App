import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Gifts} from '../../../interfaces/gifts';
import {GiftsService} from '../../../services/request/gifts.service';

@Component({
    selector: 'app-gift-form',
    templateUrl: './gift-form.component.html',
    styleUrls: ['./gift-form.component.scss']
})
export class GiftFormComponent implements OnInit {
    gifts: Gifts[] = [{} as Gifts];
    people: string;

    constructor(private route: ActivatedRoute, private giftsService: GiftsService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            if (params.get('idPeople')) {
                this.people = params.get('idPeople');
            } else {
                this.gifts = await this.giftsService.getGift(params.get('idGift'));
            }
        });
    }

    handleGift() {
        this.gifts[0]._id ? this.update() : this.add();
    }

    private async update() {
        await this.giftsService.update(this.gifts[0]);
    }

    private async add() {
        this.gifts[0].person_id = this.people;
        await this.giftsService.add(this.gifts[0]);
    }

}
