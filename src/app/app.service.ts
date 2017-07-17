import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  constructor(public http: Http) {
  }

  getVideos() {
    return this.http.get('assets/videos.json')
      .toPromise();
  }
}
