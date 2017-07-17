import {Component} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  videos: Array<any>;

  constructor(private appService: AppService) {
    this.appService.getVideos().then((response) => {
      this.videos = response.json().data;
      console.log(this.videos);
    })
  };


}
