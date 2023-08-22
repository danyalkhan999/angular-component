import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsAlertsComponent } from './products-alerts/products-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            RouterModule.forRoot([
                { path: '', component: ProductListComponent },
                { path: 'products/:productId', component: ProductDetailsComponent }
            ])
        ],
        declarations: [
            AppComponent,
            TopBarComponent,
            ProductListComponent,
            ProductsAlertsComponent,
            ProductDetailsComponent
        ],
        bootstrap: [
            AppComponent
        ]
    })
], AppModule);
export { AppModule };
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map