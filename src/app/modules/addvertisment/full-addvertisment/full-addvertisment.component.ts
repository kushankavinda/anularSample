import { Component, OnInit } from '@angular/core';
import { FullAddvertismentsService } from './full-addvertisments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-addvertisment',
  templateUrl: './full-addvertisment.component.html',
  styleUrls: ['./full-addvertisment.component.css']
})
export class FullAddvertismentComponent implements OnInit {
  adds: any [] = [];
  routerUrl: any;
  saveAndCloseVisible: boolean;

  constructor(private router: Router ,
    private fullAddvertismentsService: FullAddvertismentsService) { }

  ngOnInit() {
      // adds array
    //  this.adds = ['aaa', 'bbb', 'c', 'd', 'e', 'f' , 'g' , 'h'];
    this.routerUrl = this.router.url;
    if ( this.routerUrl === '/advertisment') {
      this.timeline();
    } else if (this.routerUrl === '/unfollow') {
      this.unfollow();
    } else if (this.routerUrl === '/follow') {
      this.follow();
    }
  }

  Cancel(itemId: any) {
    //  this.adds.splice(i, 1);
    this.fullAddvertismentsService.removeFormTimeline(itemId).subscribe(
      res => {
        this.timeline();
      }
    );

  }
  Save(i: any, addvertisment: any) {
    this.adds.splice(0, 0, this.adds[i]);
    this.adds.splice( i + 1, 1);
    this.fullAddvertismentsService.saveFormTimeline(addvertisment).subscribe(
      res => {
      //  this.timeline();
      }
    );
  }

  timeline () {
    this.adds = [];
    this.saveAndCloseVisible = true;

    this.fullAddvertismentsService.allAdd().subscribe(
      res => {
        res.forEach(
          event => {
            this.adds.push(event);
          }
        );
      }
    );
  }
  unfollow () {
    this.adds = [];
    this.saveAndCloseVisible = false;

    this.fullAddvertismentsService.removeAdds().subscribe(
      res => {
        res.forEach(
          event => {
            this.adds.push(event);
          }
        );
      }
    );
  }
  follow () {
    this.adds = [];
    this.saveAndCloseVisible = false;
    this.fullAddvertismentsService.followAdds().subscribe(
      res => {
        res.forEach(
          event => {
            this.adds.push(event);
          }
        );
      }
    );
  }

}
