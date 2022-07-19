// Author: Aditya Mahale(ad619659@dal.ca)

import http from "./httpService";

const reservationsAPIEndpoint = "/reservationSummary/";

export const getYearlyAnalysis = () => {
  return http.get(reservationsAPIEndpoint+'getYearlyData');
};

export const getMonthlyAnalysis = () => {
    return http.get(reservationsAPIEndpoint+'getMonthlyData');
  };

  export const getDailyAnalysis = () => {
    return http.get(reservationsAPIEndpoint+'getDailyData');
  };

