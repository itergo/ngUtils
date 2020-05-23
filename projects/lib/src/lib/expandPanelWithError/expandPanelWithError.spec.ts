import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleComponent } from './example.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionPanel, MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { expandPanelWithError } from './expandPanelWithError';

fdescribe('ExampleComponent', () => {
    let component: ExampleComponent;
    let fixture: ComponentFixture<ExampleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExampleComponent],
            imports: [NoopAnimationsModule, CdkAccordionModule, MatExpansionModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should expand panel 1 and 3', () => {
        const panels = fixture.componentInstance.matExpansionPanels.toArray();

        expect(panels[0].expanded).toBe(false);
        expect(panels[1].expanded).toBe(false);
        expect(panels[2].expanded).toBe(false);

        expandPanelWithError(fixture.componentInstance.matExpansionPanels);
        
        expect(panels[0].expanded).toBe(true);
        expect(panels[1].expanded).toBe(false);
        expect(panels[2].expanded).toBe(true);
    });
});
