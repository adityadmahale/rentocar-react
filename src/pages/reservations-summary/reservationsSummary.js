import './reservationsSummary.css';
import * as React from 'react';
import Navbar from './../../components/common/nav-bar'
import rentalImage from '../../assets/images/rental.png';
import yearlyAnalysis from '../../assets/images/YearlyAnalysis.png';
import oneYearData from '../../assets/images/OneYearData.png';
import monthlyAnalysis from '../../assets/images/MonthlyAnalysis.png';
import dailyData from '../../assets/images/dailyData.png';


function ReservationsSummary() {

  const [tabsValue, setValue] = React.useState(1);

  const handleTabChange = (newValue) => {
    setValue(newValue);
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
          <img src={oneYearData} style={{maxHeight: "50%", width: "50%"}}/>
          <br/>
          <p>Total rentals in the year = 520</p>
          <br/><br/><br/>
          <h2>Yearly Analysis</h2>
          <img src={yearlyAnalysis} style={{maxHeight: "50%", width: "50%"}}/>
        </div>
        <div className={tabsValue === 2 ? "content  active-content" : "content"}>
        <h2>Current Month Analysis</h2>
          <img src={monthlyAnalysis} style={{maxHeight: "50%", width: "50%"}}/>
          <br/>
          <p>Total rentals in the month = 274</p>
          <br/><br/><br/>
          <h2>Monthly Analysis</h2>
          <img src={oneYearData} style={{maxHeight: "50%", width: "50%"}}/>
        </div>
        <div className={tabsValue === 3 ? "content  active-content" : "content"}>
        <h2>Today's Analysis</h2>
          <img src={dailyData} style={{maxHeight: "50%", width: "50%"}}/>
          <br/>
          <p>Total rentals in the day = 520</p>
        </div>
      </div>
    </div>
  );
}

export default ReservationsSummary;
