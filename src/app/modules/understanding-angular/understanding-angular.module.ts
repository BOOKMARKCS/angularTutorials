import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderstandingAngularRoutingModule } from './understanding-angular-routing.module';
import { ComponentLifecycleComponent } from './components/components/component-lifecycle/component-lifecycle.component';
import { NgOnChangesComponent } from './components/components/component-lifecycle/ng-on-changes/ng-on-changes.component';
import { NgOnInitComponent } from './components/components/component-lifecycle/ng-on-init/ng-on-init.component';
import { NgDoCheckComponent } from './components/components/component-lifecycle/ng-do-check/ng-do-check.component';
import { NgAfterContentInitComponent } from './components/components/component-lifecycle/ng-after-content-init/ng-after-content-init.component';
import { NgAfterContentCheckedComponent } from './components/components/component-lifecycle/ng-after-content-checked/ng-after-content-checked.component';
import { NgAfterViewInitComponent } from './components/components/component-lifecycle/ng-after-view-init/ng-after-view-init.component';
import { NgAfterViewCheckedComponent } from './components/components/component-lifecycle/ng-after-view-checked/ng-after-view-checked.component';
import { NgOnDestroyComponent } from './components/components/component-lifecycle/ng-on-destroy/ng-on-destroy.component';
import { ViewEncapsulationComponent } from './components/components/view-encapsulation/view-encapsulation.component';
import { ViewEncapsulationEmulatedComponent } from './components/components/view-encapsulation/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationNoneComponent } from './components/components/view-encapsulation/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadowDomComponent } from './components/components/view-encapsulation/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { ComponentInteractionComponent } from './components/components/component-interaction/component-interaction.component';
import { InputOutputComponent } from './components/components/sharing-data/input-output/input-output.component';
import { SingleSlotContentProjectionComponent } from './components/components/content-projection/single-slot-content-projection/single-slot-content-projection.component';
import { ContentProjectionComponent } from './components/components/content-projection/content-projection.component';
import { MultiSlotContentProjectionComponent } from './components/components/content-projection/multi-slot-content-projection/multi-slot-content-projection.component';
import { ConditionalContentProjectionComponent } from './components/components/content-projection/conditional-content-projection/conditional-content-projection.component';
import { DynamicComponentComponent } from './components/components/dynamic-component/dynamic-component.component';
import { AngularElementsComponent } from './components/components/angular-elements/angular-elements.component';
import { TextInterpolationComponent } from './components/Templates/text-interpolation/text-interpolation.component';
import { TemplateStatementsComponent } from './components/Templates/template-statements/template-statements.component';
import { PropertyBindingComponent } from './components/Templates/Binding/property-binding/property-binding.component';
import { AttributeBindingComponent } from './components/Templates/Binding/attribute-binding/attribute-binding.component';
import { ClassAndStyleBindingComponent } from './components/Templates/Binding/class-and-style-binding/class-and-style-binding.component';
import { EventBindingComponent } from './components/Templates/Binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/Templates/Binding/two-way-binding/two-way-binding.component';
import { PipesComponent } from './components/Templates/pipes/pipes.component';
import { DatePipeComponent } from './components/Templates/pipes/date-pipe/date-pipe.component';
import { UpperCasePipeComponent} from "./components/Templates/pipes/upper-case-pipe/upper-case-pipe.component";
import { LowerCasePipeComponent} from "./components/Templates/pipes/lower-case-pipe/lower-case-pipe.component";
import { CurrencyPipeComponent } from './components/Templates/pipes/currency-pipe/currency-pipe.component';
import { DecimalPipeComponent} from "./components/Templates/pipes/decimal-pipe/decimal-pipe.component";
import { PercentPipeComponent} from "./components/Templates/pipes/percent-pipe/percent-pipe.component";
import { TemplateReferanceVariablesComponent } from './components/Templates/template-referance-variables/template-referance-variables.component';
import { SVGasTemplatesComponent } from './components/Templates/svgas-templates/svgas-templates.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import {FormsModule} from "@angular/forms";
import { SharingDataComponent } from './components/components/sharing-data/sharing-data.component';


@NgModule({
  declarations: [
    ComponentLifecycleComponent,
    NgOnChangesComponent,
    NgOnInitComponent,
    NgDoCheckComponent,
    NgAfterContentInitComponent,
    NgAfterContentCheckedComponent,
    NgAfterViewInitComponent,
    NgAfterViewCheckedComponent,
    NgOnDestroyComponent,
    ViewEncapsulationComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationShadowDomComponent,
    ComponentInteractionComponent,
    InputOutputComponent,
    SingleSlotContentProjectionComponent,
    ContentProjectionComponent,
    MultiSlotContentProjectionComponent,
    ConditionalContentProjectionComponent,
    DynamicComponentComponent,
    AngularElementsComponent,
    TextInterpolationComponent,
    TemplateStatementsComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassAndStyleBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    PipesComponent,
    DatePipeComponent,
    UpperCasePipeComponent,
    LowerCasePipeComponent,
    CurrencyPipeComponent,
    DecimalPipeComponent,
    PercentPipeComponent,
    TemplateReferanceVariablesComponent,
    SVGasTemplatesComponent,
    DirectivesComponent,
    DependencyInjectionComponent,
    SharingDataComponent
  ],
  imports: [
    CommonModule,
    UnderstandingAngularRoutingModule,
    FormsModule
  ]
})
export class UnderstandingAngularModule { }
