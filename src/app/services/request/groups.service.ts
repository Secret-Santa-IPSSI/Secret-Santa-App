import {Injectable} from '@angular/core';
import {Group} from '../../interfaces/group';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
import {People} from '../../interfaces/people';

@Injectable({
    providedIn: 'root'
})
export class GroupsService {

    constructor(private http: HttpClient, private router: Router) {
    }

    public getGroups(): Promise<Group[]> {
        return new Promise<Group[]>((resolve, reject) => {
            const url = environment.api + 'group';
            this.http.get(url).subscribe(success => {
                resolve(success as Group[]);
            }, error => {
                reject(error);
            });
        });
    }

    public getGroup(id: string): Promise<Group> {
        return new Promise<Group>((resolve, reject) => {
            const url = environment.api + 'group/' + id;
            this.http.get(url).subscribe(success => {
                this.getMembers(id).then(response => {
                    if (response) {
                        const tab = [success as Group, response];
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

    public getMembers(id: string): Promise<People> {
        return new Promise<People>((resolve, reject) => {
            const url = environment.api + 'group/' + id + '/members';
            this.http.get(url).subscribe(success => {
                resolve(success as People);
            }, error => {
                reject(error);
            });
        });
    }


    public add(group: Group): Promise<Group> {
        return new Promise<Group>((resolve, reject) => {
            const url = environment.api + 'group/';
            this.http.post(url, group).subscribe(success => {
                resolve(success as Group);
                this.router.navigate(['/groups']);
            }, error => {
                reject(error);
            });
        });
    }

    public update(group: Group): Promise<Group> {
        return new Promise<Group>((resolve, reject) => {
            const url = environment.api + 'group/' + group._id;
            this.http.put(url, group).subscribe(success => {
                resolve(success as Group);
            }, error => {
                reject(error);
            });
        });
    }

    public delete(group: Group): Promise<Group> {
        return new Promise<Group>((resolve, reject) => {
            const url = environment.api + 'group/' + group._id;
            this.http.delete(url).subscribe(success => {
                resolve(success as Group);
            }, error => {
                reject(error);
            });
        });
    }

    public randomize(group: Group): Promise<Group> {
        return new Promise<Group>((resolve, reject) => {
            const url = environment.api + 'group/' + group._id + '/randomize';
            this.http.get(url).subscribe(success => {
                resolve(success as Group);
            }, error => {
                reject(error);
            });
        });
    }
}
