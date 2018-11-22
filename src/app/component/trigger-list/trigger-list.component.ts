import { Component, OnInit } from '@angular/core';
import { Css2TsService } from '../../cssformater/css';

@Component({
  selector: 'app-trigger-list',
  templateUrl: './trigger-list.component.html',
  styleUrls: ['./trigger-list.component.scss']
})
export class TriggerListComponent implements OnInit {
  list = []
  constructor(private css2Ts: Css2TsService) { }

  ngOnInit() {
  }
  addTrigger() {
    this.css2Ts.triggerList.push(null)
  }
}
