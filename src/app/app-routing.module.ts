import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {ContactComponent} from "./main/contact/contact.component";
import {AboutComponent} from "./main/about/about.component";
import {ItemComponent} from "./main/item/item.component";
import {ItemDetailsComponent} from "./main/item/item-details/item-details.component";
import {ItemListComponent} from "./main/item/item-list/item-list.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'item/:id',
        component: ItemComponent,
        children: [
            {
                path: 'details',
                component: ItemDetailsComponent
            },
            {
                path: 'list',
                component: ItemListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
