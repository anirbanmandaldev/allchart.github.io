import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chat',
  templateUrl: './pie-chat.component.html',
  styleUrls: ['./pie-chat.component.scss']
})
export class PieChatComponent {

  public chart: any;

  constructor() {}

  ngOnInit(): void {
    this.createChart();
    this.createCharttwo();
  }
  
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }


  createCharttwo(){

    this.chart = new Chart("MyChartDonut", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
	       datasets: [{
    label: 'My First Dataset',
    data: [300, 240, 100, 432, 253, 34],
    backgroundColor: [
      'red',
      'pink',
      'green',
			'yellow',
      'orange',
      'blue',			
    ],
    hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5
      }

    });
  }

}
