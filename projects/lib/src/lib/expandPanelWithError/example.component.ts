import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
    selector: 'lib-example',
    templateUrl: 'example.component.html',
})
export class ExampleComponent implements OnInit {
    @ViewChildren(MatExpansionPanel) matExpansionPanels!: QueryList<MatExpansionPanel>;

    constructor() { }

    ngOnInit(): void {
    }
}