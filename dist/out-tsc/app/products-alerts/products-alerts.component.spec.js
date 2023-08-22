import { TestBed } from '@angular/core/testing';
import { ProductsAlertsComponent } from './products-alerts.component';
describe('ProductsAlertsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ProductsAlertsComponent]
        });
        fixture = TestBed.createComponent(ProductsAlertsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=products-alerts.component.spec.js.map