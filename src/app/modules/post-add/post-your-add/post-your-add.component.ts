import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { PostAddServiceService } from '../post-add-service.service';
import { PostAdd } from '../post-add';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-your-add',
  templateUrl: './post-your-add.component.html',
  styleUrls: ['./post-your-add.component.css']
})

export class PostYourAddComponent implements OnInit {

//  post: any;

  cat: any;
  description: any;
  subject: any;

  cities1: SelectItem[];

  constructor( private _postAddServiceService: PostAddServiceService , private router: Router ) {
       // SelectItem API with label-value pairs
       this.cities1 = [
        {label:'Select Category', value:null},
        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];
  }

  ngOnInit() {

  }

  submitAdd() {
    const postAdd = new  PostAdd ('','','','');

    postAdd.category =  this.cat.name;
    postAdd.description = this.description;
    postAdd.pushlisherRef = 'user';
    postAdd.subject = this.subject;

    this._postAddServiceService.postAdd(postAdd)
    .subscribe(
      res => {
          console.log(res);
      }
     );
     this.router.navigate(['advertisment']);
  }

}
