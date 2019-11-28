import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BrandBar';
  items: MenuItem[];

    constructor(private router: Router) {}

    ngOnInit() {

        this.items = [
            {
                label: 'All Advertisments',
                command: () => this.navBarClick('advertisment')
                /*,
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]*/
            },
            {
                label: 'Followed Addvertisments',
                command: () => this.navBarClick('follow')
            },
            {
                label: 'Unfollow Addvertisments',
                command: () => this.navBarClick('unfollow')
            },
            {
                label: 'Post Advertisment',
                command: () => this.navBarClick('post-advertisment')
                /*,
                items: [{
                        label: 'New',
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]*/
            },
            {
                label: 'My Profile',
                command: () => this.navBarClick('profile')
            }
        ];

    }

    testRoutine() {
        this.router.navigate(['/advertisment']);
    }

    postAdd() {
        this.router.navigate(['/post-advertisment']);
    }

    navBarClick(value: string) {
        this.router.navigate(['/' + value]);
    }


}
