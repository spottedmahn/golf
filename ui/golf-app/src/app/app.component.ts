import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //constructor(private swUpdate: SwUpdate){}
  ngOnInit(): void {
    //this will only work on prod builds
    //commenting out for now...
    // if(this.swUpdate.isEnabled){
    //   this.swUpdate.available.subscribe(() => {
    //     if(confirm("New version available.  Would you like to load the new version?")){
    //       window.location.reload();
    //     }
    //   })
    // }
  }
  title = 'My Golf App';
}
