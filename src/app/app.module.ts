import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { AddFavePipePipe } from './add-fave-pipe.pipe';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './main/contact/contact.component';
import { AboutComponent } from './main/about/about.component';
import { ItemComponent } from './main/item/item.component';
import { ItemListComponent } from './main/item/item-list/item-list.component';
import { ItemDetailsComponent } from './main/item/item-details/item-details.component';

@NgModule({
    declarations: [
        AppComponent,
        CounterComponentComponent,
        AddFavePipePipe,
        MainComponent,
        ContactComponent,
        AboutComponent,
        ItemComponent,
        ItemListComponent,
        ItemDetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
