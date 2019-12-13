import {Injectable} from '@angular/core';
import {Group} from '../../interfaces/group';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) {
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
        resolve(success as Group);
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
}
