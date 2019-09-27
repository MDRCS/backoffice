// Angular
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	@ViewChild('revenueLineChart') chart: ElementRef;

	ngAfterViewInit() { this.createChart() }

	ngOnInit() {
    this.createChart();
  	}

  	onChartClick(event) {
    	console.log(event);
  	}

	  constructor(){	
	}

  	createChart() {
	const ctx = this.chart.nativeElement.getContext('2d');

    const revenueLineChart = new Chart(ctx, {
		type: 'bar',
		data: {
		  labels: ["La Voie Express", "Danone", "OCP", "Cosumar", "AFRIQUIA"],
		  datasets: [
			{
			   label: "Transport Orders",
			   backgroundColor: "#00bece",
			   data: [408,547,675,734,1050]
			},{
			  label: "SMS",
			  backgroundColor: "#8069ff",
			  data: [408,547,675,734,560]
			},
			{
				label: "Email",
				backgroundColor: "#f0f5f7",
				data: [133,221,783,2478,800]
			}
		  ]
		},
		options: {
		  title: {
			display: true,
			text: 'Overall Clients (thousands)'
		  }
		}
	});
  }


  
}
