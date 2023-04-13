import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgOnChangesComponent} from "./components/components/component-lifecycle/ng-on-changes/ng-on-changes.component";
import {
  NgAfterContentCheckedComponent
} from "./components/components/component-lifecycle/ng-after-content-checked/ng-after-content-checked.component";
import {
  NgAfterContentInitComponent
} from "./components/components/component-lifecycle/ng-after-content-init/ng-after-content-init.component";
import {
  NgAfterViewCheckedComponent
} from "./components/components/component-lifecycle/ng-after-view-checked/ng-after-view-checked.component";
import {
  NgAfterViewInitComponent
} from "./components/components/component-lifecycle/ng-after-view-init/ng-after-view-init.component";
import {NgDoCheckComponent} from "./components/components/component-lifecycle/ng-do-check/ng-do-check.component";
import {NgOnDestroyComponent} from "./components/components/component-lifecycle/ng-on-destroy/ng-on-destroy.component";
import {NgOnInitComponent} from "./components/components/component-lifecycle/ng-on-init/ng-on-init.component";
import {InputOutputComponent} from "./components/components/sharing-data/input-output/input-output.component";
import {SharingDataComponent} from "./components/components/sharing-data/sharing-data.component";

const routes: Routes = [
  {
    path: "components", children: [
      {
        path: "component-lifecycle", children: [
          {path: "ng-after-content-checked", component: NgAfterContentCheckedComponent},
          {path: "ng-after-content-init", component: NgAfterContentInitComponent},
          {path: "ng-after-view-checked", component: NgAfterViewCheckedComponent},
          {path: "ng-after-view-init", component: NgAfterViewInitComponent},
          {path: "ng-do-check", component: NgDoCheckComponent},
          {path: "ng-on-changes", component: NgOnChangesComponent},
          {path: "ng-on-destroy", component: NgOnDestroyComponent},
          {path: "ng-on-init", component: NgOnInitComponent},
        ]
      },
      {
        path: "sharing-data", children: [
          {path: "", component: SharingDataComponent},
          {path: "input-output", component: InputOutputComponent}
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnderstandingAngularRoutingModule {
}
