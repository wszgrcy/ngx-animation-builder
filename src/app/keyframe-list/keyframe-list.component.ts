import { Component, OnInit, Input } from '@angular/core';
import { Css2TsService } from '../cssformater/css';

@Component({
  selector: 'app-keyframe-list',
  templateUrl: './keyframe-list.component.html',
  styleUrls: ['./keyframe-list.component.scss']
})
export class KeyframeListComponent implements OnInit {
  @Input() list: { [name: string]: any }
  constructor(public css2Ts: Css2TsService) { }

  ngOnInit() {
  }

}
