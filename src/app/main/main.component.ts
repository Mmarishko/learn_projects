import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements  OnInit {

    items = [
        {
            id: 1,
            name: 'Элемент 1'
        },
        {
            id: 2,
            name: 'Элемент 2'
        },
        {
            id: 3,
            name: 'Элемент 3'
        }
    ]
    constructor(
        private router: Router,
    ) {
    }
    ngOnInit() {

    }
    linkToSrc(src: string) {
        this.router.navigateByUrl(src);
    }
}
