import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ListComponent } from "./list.component";
import {ListRoutingModule} from "./list-routing.module"

@NgModule({
    imports: [
        ListRoutingModule
    ],
    declarations: [
        ListComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ListModule { }
