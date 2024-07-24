document.getElementById('chart');

domo.get('/data/v1/olist?fields=order_status,customer_geolocation_state&groupby=customer_geolocation_state&limit=6').then(function(data){
  let states = [];
  let payments = [];
  data.forEach(function(item, index) {
      if(item.customer_geolocation_state !== 'sp'){
          states[index] = item.customer_geolocation_state;
          payments[index] = item.order_status;
      }
  });
  console.log(states);
  console.log(payments);

  new Chart("myChart", {
      type: "bar",
      data: {
        labels: states,
        datasets: [{
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
          ],
          data: payments
        }]
      },
      options: {
        legend: {display: false}
      }
  });

});
