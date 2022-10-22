// id: bridge-chart and canvas 
let canvas = document.querySelector('#bridge-chart') // id from bridgesChart.html to get functionality on the chart.
let ctx = canvas.getContext('2d')

let chart = new Chart(ctx, { // creating a chart 
    type: 'bar',  // The chart model in bar 
    data: {
        labels:['Verrazano-Narrows Bridge','Golden Gare Bridge','Mackinac Bridge','George Washington Bridge','Tacoma Narrows Bridge'],
        datasets: [{
            label: 'Span (meters)', // The title Span(meters)
            data: [1298.4,1280.2,1158.0,1067.0,853.44], // data in Span(meters)
            backgroundColor: ['red','yellow','green','blue','orange'], // Bar colors for each bridge

        }] // https://www.chartjs.org/docs/latest/axes/
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

})