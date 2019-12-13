import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {Gifts} from '../../interfaces/gifts';
import {PeopleService} from './people.service';

@Injectable({
    providedIn: 'root'
})
export class GiftsService {

    constructor(private http: HttpClient, private router: Router, private peopleService: PeopleService) {
    }

    public getGifts(id): Promise<Gifts[]> {
        return new Promise<Gifts[]>((resolve, reject) => {
            const url = environment.api + 'persons/' + id + '/gifts';
            this.http.get(url).subscribe(success => {
                console.log(success);
                resolve(success as Gifts[]);
            }, error => {
                reject(error);
            });
        });
    }

    public getGift(id: string): Promise<Gifts[]> {
        return new Promise<Gifts[]>((resolve, reject) => {
            const url = environment.api + 'gifts/' + id;
            this.http.get(url).subscribe(success => {
                const gift = success as Gifts;
                this.peopleService.getPeople(gift.person_id).then(response => {
                    if (response) {
                        const tab = [success as Gifts, response[1]];
                        // @ts-ignore
                        resolve(tab);
                    }
                }, error => {
                    console.log(error);
                });
            }, error => {
                reject(error);
            });
        });
    }


    public add(gifts: Gifts): Promise<Gifts> {
        return new Promise<Gifts>((resolve, reject) => {
            const url = environment.api + 'persons/' + gifts.person_id + '/gifts';
            this.http.post(url, gifts).subscribe(success => {
                resolve(success as Gifts);
                this.router.navigate(['/gifts']);
            }, error => {
                reject(error);
            });
        });
    }

    public update(gifts: Gifts): Promise<Gifts> {
        return new Promise<Gifts>((resolve, reject) => {
            const url = environment.api + 'gifts/' + gifts._id;
            this.http.put(url, gifts).subscribe(success => {
                resolve(success as Gifts);
                this.router.navigate(['/gifts', success._id]);
            }, error => {
                reject(error);
            });
        });
    }

    public delete(gift: Gifts): Promise<Gifts> {
        return new Promise<Gifts>((resolve, reject) => {
            const url = environment.api + 'gifts/' + gift._id;
            this.http.delete(url).subscribe(success => {
                resolve(success as Gifts);
            }, error => {
                reject(error);
            });
        });
    }
}
