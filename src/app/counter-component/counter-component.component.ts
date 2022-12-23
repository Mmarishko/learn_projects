import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-counter-component',
    templateUrl: './counter-component.component.html',
    styleUrls: ['./counter-component.component.css']
})
export class CounterComponentComponent implements OnInit {
    @Output() public currentCounter = new EventEmitter<number>();
    counter = 0;

    constructor() { }

    ngOnInit(): void {
    }

    changeCount(type: boolean) {
        type ? this.counter++ : this.counter--;
        this.currentCounter.emit(Number(this.counter));
    }
}
