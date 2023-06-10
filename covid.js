import React, { useEffect, useState } from 'react'
import './style.css'
const Covid = () => {
    const [CovidData, setCovidData] = useState([]);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setCovidData(actualData.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (
        <div className='covid'>
            <div className='header'>
                <h1>COVID-19 TRACKER</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <p className='card_name'><span>OUR COUNTRY</span></p>
                    <p className='card_total'>INDIA</p>
                </div>
                <div className='card'>
                    <p className='card_name'><span>TOTAL RECOVERED</span></p>
                    <p className='card_total'>{CovidData.recovered}</p>
                </div>
                <div className='card'>
                    <p className='card_name'><span>TOTAL CONFIRMED</span></p>
                    <p className='card_total'>{CovidData.confirmed}</p>
                </div>
                <div className='card'>
                    <p className='card_name'><span>TOTAL DEATH</span></p>
                    <p className='card_total'>{CovidData.deaths}</p>
                </div>
                <div className='card'>
                    <p className='card_name'><span>TOTAL ACTIVE</span></p>
                    <p className='card_total'>{CovidData.active}</p>
                </div>
                <div className='card'>
                    <p className='card_name'><span>LAST UPDATED </span></p>
                    <p className='card_total'>{CovidData.lastupdatedtime}</p>
                </div>
            </div>
        </div>
    )
}

export default Covid