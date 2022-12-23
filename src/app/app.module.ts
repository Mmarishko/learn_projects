import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { AddFavePipePipe } from './add-fave-pipe.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponentComponent,
        AddFavePipePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
