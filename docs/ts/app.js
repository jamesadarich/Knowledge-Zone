var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'angular2/angular2', './page'], function (require, exports, angular2_1, page_1) {
    var AppShell = (function () {
        function AppShell(router) {
            this.router = router;
            router
                .config('/', page_1.Page, 'page');
            this.name = 'James';
            this.test();
        }
        AppShell.prototype.test = function () {
            console.log(this);
        };
        AppShell = __decorate([
            angular2_1.Component({
                selector: 'my-app'
            }),
            angular2_1.View({
                template: '<h1>Hello, {{ name }}</h1><button (click)="test()">Who Am I?</button><router-outlet></router-outlet>',
                directives: [page_1.Page]
            })
        ], AppShell);
        return AppShell;
    })();
    exports.AppShell = AppShell;
    angular2_1.bootstrap(AppShell);
});
