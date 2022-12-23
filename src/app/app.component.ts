import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    outputText = 'Hello';

    arrObjects = [
        { objectName: 'FirstName' },
        { objectName: 'SecondName' },
        { objectName: 'ThirdName' }
    ];

    currentDate = new Date();

    currentNumber = 0;

    ngOnInit(){

    }

    changeCurrentNumber(number: any) {
        this.currentNumber = number;
    }
}
