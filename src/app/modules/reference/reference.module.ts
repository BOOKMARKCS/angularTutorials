import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { ObservablesAndRxJSComponent } from './components/conceptual-reference/observables-and-rx-js/observables-and-rx-js.component';
import { TheRxJSLibraryComponent } from './components/conceptual-reference/observables-and-rx-js/the-rx-js-library/the-rx-js-library.component';
import { ObservablesInAngularComponent } from './components/conceptual-reference/observables-and-rx-js/observables-in-angular/observables-in-angular.component';
import { PracticalObservableUsageComponent } from './components/conceptual-reference/observables-and-rx-js/practical-observable-usage/practical-observable-usage.component';
import { ObservablesComparedToOtherTechniquesComponent } from './components/conceptual-reference/observables-and-rx-js/observables-compared-to-other-techniques/observables-compared-to-other-techniques.component';
import { DepecdencyInJectionComponent } from './components/conceptual-reference/depecdency-in-jection/depecdency-in-jection.component';
import { DIInActionComponent } from './components/conceptual-reference/depecdency-in-jection/di-in-action/di-in-action.component';
import { ConceptualReferenceComponent } from './components/conceptual-reference/conceptual-reference.component';
import { APIReferrenceComponent } from './components/api-referrence/api-referrence.component';
import { AnimationsComponent } from './components/api-referrence/animations/animations.component';
import { BrowserComponent } from './components/api-referrence/animations/browser/browser.component';
import { TestingComponent } from './components/api-referrence/animations/browser/testing/testing.component';
import { CommonComponent } from './components/api-referrence/common/common.component';
import { HttpComponent } from './components/api-referrence/common/http/http.component';
import { UpgradeComponent } from './components/api-referrence/common/upgrade/upgrade.component';
import { CoreComponent } from './components/api-referrence/core/core.component';
import { GlobalComponent } from './components/api-referrence/core/global/global.component';
import { ElementsComponent } from './components/api-referrence/elements/elements.component';
import { FormsComponent } from './components/api-referrence/forms/forms.component';
import { LocalizeComponent } from './components/api-referrence/localize/localize.component';
import { InitComponent } from './components/api-referrence/localize/init/init.component';
import { PlatformBrowserComponent } from './components/api-referrence/platform-browser/platform-browser.component';
import { PlatformBrowserDynamicComponent } from './components/api-referrence/platform-browser-dynamic/platform-browser-dynamic.component';
import { PlatformServerComponent } from './components/api-referrence/platform-server/platform-server.component';
import { RouterComponent } from './components/api-referrence/router/router.component';
import { ServiceWorkerComponent } from './components/api-referrence/service-worker/service-worker.component';
import { StaticComponent } from './components/api-referrence/upgrade/static/static.component';


@NgModule({
  declarations: [
    ObservablesAndRxJSComponent,
    TheRxJSLibraryComponent,
    ObservablesInAngularComponent,
    PracticalObservableUsageComponent,
    ObservablesComparedToOtherTechniquesComponent,
    DepecdencyInJectionComponent,
    DIInActionComponent,
    ConceptualReferenceComponent,
    APIReferrenceComponent,
    AnimationsComponent,
    BrowserComponent,
    TestingComponent,
    CommonComponent,
    HttpComponent,
    UpgradeComponent,
    CoreComponent,
    GlobalComponent,
    ElementsComponent,
    FormsComponent,
    LocalizeComponent,
    InitComponent,
    PlatformBrowserComponent,
    PlatformBrowserDynamicComponent,
    PlatformServerComponent,
    RouterComponent,
    ServiceWorkerComponent,
    StaticComponent
  ],
  imports: [
    CommonModule,
    ReferenceRoutingModule
  ]
})
export class ReferenceModule { }
