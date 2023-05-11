import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from './api.json';

const Charts = () => {
  const [userData, setUserData] = useState([]);
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    // Filter user data by age
    const filteredUserData = data.filter(user => {
      const dob = new Date(user.dob);
      const today = new Date();
      
      const ageDiff = today - dob;
      const ageDate = new Date(ageDiff);
      return ageDate > 30;
    });
    // Filter user data for country
    const filteredUserDataForCountry = data.filter(user => {
        return user;
      });

    // Group user data by gender
    const genderData = filteredUserData.reduce((acc, user) => {
      if (user.gender in acc) {
        acc[user.gender]++;
      } else {
        acc[user.gender] = 1;
      }
      return acc;
    }, {});

    // Convert gender data to chart data
    const genderChartData = Object.keys(genderData).map(gender => ({
      gender,
      count: genderData[gender],
    }));

    // Group user data by country
    const countryData = filteredUserDataForCountry.reduce((acc, user) => {
      if (user.country in acc) {
        acc[user.country]++;
      } else {
        acc[user.country] = 1;
      }
      return acc;
    }, {});

    // Convert country data to chart data
    const countryChartData = Object.keys(countryData).map(country => ({
        country,
        count: countryData[country],
      }));

    // Update state with chart data
    setUserData(genderChartData);
    setCountryData(countryChartData);
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexwrap: 'wrap',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <h1 style={{textAlign: 'center'}}>Charts</h1>
      <h2>User Data by Gender for People with Age more than 30</h2>
      <BarChart width={600} height={300} data={userData}>
        <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="gender" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="lightblue" />
      </BarChart>
      <h2>User Data by Country</h2>
      <BarChart width={600} height={300} data={countryData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="lightgreen" />
      </BarChart>
    </div>
  );
};
export default Charts;