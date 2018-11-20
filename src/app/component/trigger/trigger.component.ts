import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { Css2TsService } from '../../cssformater/css';

@Component({
  selector: 'app-trigger',
  templateUrl: './trigger.component.html',
  styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent implements OnInit {
  @ViewChild('triggerContainer', { read: ViewContainerRef }) triggerContainer: ViewContainerRef;
  @ViewChild('triggerState') triggerState: TemplateRef<any>
  @ViewChild('triggerTransition') triggerTransition: TemplateRef<any>
  selectedType: number;
  definitionOptions = [
    { label: '状态类', value: 1 },
    { label: '过度类', value: 2 },
  ];
  value = []
  constructor(public css2Ts: Css2TsService) { }

  ngOnInit() {
    // setInterval(() => {
    //   console.log(this.css2Ts.triggerList)
    // },5000)
  }
  addTrigger() {
    console.log('准备添加', this.selectedType)
    // this.css2Ts.triggerList.push(null);
    this.value.push(null)
    switch (this.selectedType) {
      case 1:
        this.triggerContainer.createEmbeddedView(this.triggerState, { $implicit: this.css2Ts.keyframeObject, index: this.value.length - 1 })
        break;
      case 2:
        this.triggerContainer.createEmbeddedView(this.triggerTransition, { $implicit: this.css2Ts.keyframeObject, index: this.value.length - 1 })
        break;

      default:
        break;
    }
  }
}
