import { Component, OnInit } from '@angular/core';
import { Css2TsService } from '../../cssformater/css';

@Component({
  selector: 'app-trigger-list',
  templateUrl: './trigger-list.component.html',
  styleUrls: ['./trigger-list.component.scss']
})
export class TriggerListComponent implements OnInit {
  list = []
  constructor(public css2Ts: Css2TsService) { }

  ngOnInit() {
  }
  addTrigger() {
    this.css2Ts.triggerList.push({ id: Date.now() })
  }
  trackByFn(index, value) {
    // console.log('排序', value)
    return value.id
  }
  deleteTrigger(i) {
    console.log(this.css2Ts.triggerList)
    console.log('触发', i)
    this.css2Ts.triggerList.splice(i, 1)
  }
}
