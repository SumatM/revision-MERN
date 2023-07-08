const chart = document.getElementById("chart");
const inputMonth = document.getElementById("month");
const inputvalue = document.getElementById("inputValue");
const button = document.getElementById("submit");

const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

const scoreData = [15, 20, 30, 40, 21, 72, 18, 59, 26, 49, 51, 72];

function showChart() {

 const DOMChart =  new Chart(chart, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Score",
          data: scoreData,
          backgroundColor: "gray",
          borderWidth: 1,
          borderColor: "black",
        },
      ],
    },
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const inputMonthValue = inputMonth.value;
    const inputvalueData = inputvalue.value;
    scoreData[inputMonthValue]= inputvalueData;
    DOMChart.update();
    inputMonth.value="";
    inputvalue.value=""
    
  });
}

window.addEventListener("load", showChart);




