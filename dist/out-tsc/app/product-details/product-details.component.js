import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { products } from '../products';
let ProductDetailsComponent = class ProductDetailsComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        // First get the product id from the current route
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
        // find that product from the corresponding id
        this.product = products.find((product) => product.id === productIdFromRoute);
    }
};
ProductDetailsComponent = __decorate([
    Component({
        selector: 'app-product-details',
        templateUrl: './product-details.component.html',
        styleUrls: ['./product-details.component.css'],
    })
], ProductDetailsComponent);
export { ProductDetailsComponent };
//# sourceMappingURL=product-details.component.js.map