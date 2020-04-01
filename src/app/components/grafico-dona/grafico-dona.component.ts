import { Component, OnInit, Input } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() grafico: any;


  constructor() {

   }

  ngOnInit() {

    console.log("recived: ", this.grafico);
  }

}
