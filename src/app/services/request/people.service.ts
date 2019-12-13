import {Injectable} from '@angular/core';
import {People} from '../../interfaces/people';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    constructor(private http: HttpClient, private router: Router) {
    }

    public getPeoples(): Promise<People[]> {
        return new Promise<People[]>((resolve, reject) => {
            const url = environment.api + 'persons';
            this.http.get(url).subscribe(success => {
                resolve(success as People[]);
            }, error => {
                reject(error);
            });
        });
    }

    public getPeople(id: string): Promise<People[]> {
        return new Promise<People[]>((resolve, reject) => {
            const url = environment.api + 'persons/' + id;
            this.http.get(url).subscribe(success => {
                const people = success as People;
                const tab = [people];
                if (people.id_person_to_give) {
                    this.getSanta(people.id_person_to_give).then(response => {
                        if (response) {
                            tab.push(response);
                            // @ts-ignore
                            resolve(tab);
                        }
                    }, error => {
                        console.log(error);
                    });
                } else {
                    // @ts-ignore
                    resolve(tab);
                }
            }, error => {
                reject(error);
            });
        });
    }

    public getSanta(id: string): Promise<People> {
        return new Promise<People>((resolve, reject) => {
            const url = environment.api + 'persons/' + id;
            this.http.get(url).subscribe(success => {
                resolve(success as People);
            }, error => {
                reject(error);
            });
        });
    }


    public add(people: People): Promise<People> {
        return new Promise<People>((resolve, reject) => {
            const url = environment.api + 'persons/';
            this.http.post(url, people).subscribe(success => {
                resolve(success as People);
                this.router.navigate(['/peoples']);
            }, error => {
                reject(error);
            });
        });
    }

    public update(people: People): Promise<People> {
        return new Promise<People>((resolve, reject) => {
            const url = environment.api + 'persons/' + people._id;
            this.http.put(url, people).subscribe(success => {
                resolve(success as People);
                this.router.navigate(['/peoples', success._id]);
            }, error => {
                reject(error);
            });
        });
    }

    public delete(people: People): Promise<People> {
        return new Promise<People>((resolve, reject) => {
            const url = environment.api + 'persons/' + people[0]._id;
            this.http.delete(url).subscribe(success => {
                resolve(success as People);
            }, error => {
                reject(error);
            });
        });
    }
}
