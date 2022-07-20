import './reservationsSummary.css';
import * as React from 'react';
import Navbar from './../../components/common/nav-bar'
import { Chart , registerables} from 'chart.js';
import {getDailyAnalysis, getYearlyAnalysis, getMonthlyAnalysis} from "./../../services/reservationSummaryService";
Chart.register(...registerables);



function ReservationsSummary() {



  const [tabsValue, setValue] = React.useState(1);
  let yearlyBookings;
  let monthlyBookings;
  let dailyBookings;
  let yearlyChart;
  let currentYearChart;
  let monthlyChart;
  let currentMonthChart
  let dailyChart;

  React.useEffect(() => {
    console.log('Working')
    yearlyData();
  });

  const yearlyData = async () => {
    const response = await getYearlyAnalysis();
    console.log(response.data);
    const currentYearChartElement = document.getElementById('current-year-chart').getContext('2d');
    const currentYearData = {
        columns: response.data.currentYearColumns,
        bookings: response.data.currentYearBookings
    }
    let sum = 0;
    response.data.currentYearBookings.forEach(element => {
      sum+= element;
    });
    yearlyBookings = sum;
    currentYearChart = new Chart(currentYearChartElement, {
      type: 'bar',
      data: {
          labels: currentYearData.columns,
          datasets: [{
              label: 'bookings',
              data: currentYearData.bookings,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderWidth: 1
          }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    });

    const yearlyChartElement = document.getElementById('yearly-chart').getContext('2d');
    const yearlyData = {
        columns: response.data.yearlyColumns,
        bookings: response.data.yearlyBookings
    }
    currentYearChart = new Chart(yearlyChartElement, {
      type: 'bar',
      data: {
          labels: yearlyData.columns,
          datasets: [{
              label: 'bookings',
              data: yearlyData.bookings,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderWidth: 1
          }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    });

  }

  const monthlyData = async () => {
    const response = await getMonthlyAnalysis();
    console.log(response.data);
    const currentMonthChartElement = document.getElementById('current-month-chart').getContext('2d');
    const currentMonthData = {
        columns: response.data.currentMonthColumns,
        bookings: response.data.currentMonthBookings
    }
    let sum = 0;
    response.data.currentMonthBookings.forEach(element => {
      sum+= element;
    });
    monthlyBookings = sum;
    currentMonthChart = new Chart(currentMonthChartElement, {
      type: 'bar',
      data: {
          labels: currentMonthData.columns,
          datasets: [{
              label: 'bookings',
              data: currentMonthData.bookings,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderWidth: 1
          }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    });

    const monthlyChartElement = document.getElementById('monthly-chart').getContext('2d');
    const monthlyData = {
        columns: response.data.monthlyColumns,
        bookings: response.data.monthlyBookings
    }
    monthlyChart = new Chart(monthlyChartElement, {
      type: 'bar',
      data: {
          labels: monthlyData.columns,
          datasets: [{
              label: 'bookings',
              data: monthlyData.bookings,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderWidth: 1
          }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    });

  }

  const dailyData = async () => {
    const response = await getDailyAnalysis();
    console.log(response.data);
    const dailyChartElement = document.getElementById('daily-chart').getContext('2d');
    const dayData = {
        columns: response.data.dailyColumns,
        bookings: response.data.dailyBookings
    }
    let sum = 0;
    response.data.dailyBookings.forEach(element => {
      sum+= element;
    });
    dailyBookings = sum;

    dailyChart = new Chart(dailyChartElement, {
      type: 'bar',
      data: {
          labels: dayData.columns,
          datasets: [{
              label: 'bookings',
              data: dayData.bookings,
              backgroundColor: 'rgba(0,0,0,0.8)',
              borderWidth: 1
          }]
        },
        options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
    });

  }

  const handleTabChange = (newValue) => {
    setValue(newValue);
    if(newValue == 1){
      yearlyData();
    }else if(newValue == 2){
      monthlyData();
    }else{
      dailyData();
    }
  };

  return (
    <div className="App">
      <Navbar />
      {/* <img src={rentalImage} style={{maxHeight: "230px", width: "100%"}}/> */}
      <div className="bloc-tabs">
        <button className={tabsValue === 1 ? "tabs active-tabs" : "tabs"} onClick={() => handleTabChange(1)}>
          Yearly
        </button>
        <button className={tabsValue === 2 ? "tabs active-tabs" : "tabs"} onClick={() => handleTabChange(2)}>
          Monthly
        </button>
        <button className={tabsValue === 3 ? "tabs active-tabs" : "tabs"} onClick={() => handleTabChange(3)}>
          Daily
        </button>
      </div>
      <div className="content-tabs">
        <div className={tabsValue === 1 ? "content  active-content" : "content"}>
          <h2>Current Year Analysis</h2>
          <div id = 'current-year-chart-div' className="chart-div">
            <canvas id="current-year-chart"></canvas>
          </div>
          <br/>
          <p>Total rentals in the year = {yearlyBookings}</p>
          <br/><br/><br/>
          <h2>Yearly Analysis</h2>
          <div id = 'yearly-chart-div' className="chart-div">
            <canvas id="yearly-chart"></canvas>
          </div>
        </div>
        <div className={tabsValue === 2 ? "content  active-content" : "content"}>
        <h2>Current Month Analysis</h2>
          <div id = 'current-month-chart-div' className="chart-div">
            <canvas id="current-month-chart"></canvas>
          </div>
          <br/>
          <p>Total rentals in the month = {monthlyBookings}</p>
          <br/><br/><br/>
          <h2>Monthly Analysis</h2>
          <div id = 'monthly-chart-div' className="chart-div">
            <canvas id="monthly-chart"></canvas>
          </div>
        </div>
        <div className={tabsValue === 3 ? "content  active-content" : "content"}>
        <h2>Today's Analysis</h2>
            <div id = 'daily-chart-div' className="chart-div">
              <canvas id="daily-chart"></canvas>
            </div>
          <br/>
          <p>Total rentals in the day = {dailyBookings}</p>
        </div>
      </div>
    </div>
  );
}

export default ReservationsSummary;
