import { QueryList } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

export function expandPanelWithError(panels: QueryList<MatExpansionPanel>) {
    panels.map((panel) => {
        if (panel._body.nativeElement.querySelectorAll('.ng-invalid').length > 0) {
            panel.expanded = true;
        }
    });
};