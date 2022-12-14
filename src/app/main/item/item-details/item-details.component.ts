import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
    constructor(
        private activeRouter: ActivatedRoute
    ) {}

    ngOnInit() {
        console.log('ItemDetailsComponent: ');
        console.log('параметр маршрута queryParams: ', this.activeRouter.snapshot.queryParams);
    }


}
