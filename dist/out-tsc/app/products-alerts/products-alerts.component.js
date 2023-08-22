import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let ProductsAlertsComponent = class ProductsAlertsComponent {
    constructor() {
        this.notify = new EventEmitter();
    }
};
__decorate([
    Input()
], ProductsAlertsComponent.prototype, "product", void 0);
__decorate([
    Output()
], ProductsAlertsComponent.prototype, "notify", void 0);
ProductsAlertsComponent = __decorate([
    Component({
        selector: 'app-products-alerts',
        templateUrl: './products-alerts.component.html',
        styleUrls: ['./products-alerts.component.css'],
    })
], ProductsAlertsComponent);
export { ProductsAlertsComponent };
//# sourceMappingURL=products-alerts.component.js.map