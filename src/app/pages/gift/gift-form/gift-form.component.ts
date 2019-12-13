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
    gifts: Gifts = {} as Gifts;

    constructor(private route: ActivatedRoute, private giftsService: GiftsService) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(async (params) => {
            const id = params.get('id');
            if (id) {
                this.gifts = await this.giftsService.getGift(id);
            }
        });
    }

    handleGift() {
        this.gifts._id ? this.update() : this.add();
    }

    private async update() {
        await this.giftsService.update(this.gifts);
    }

    private async add() {
        await this.giftsService.add(this.gifts);
    }

}
