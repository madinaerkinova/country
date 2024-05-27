import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants/apibaseUrl';
import { CiSearch } from "react-icons/ci";

const Main = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get(`${API_BASE_URL}`).then(function(response) {
            setData(response.data);
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-5">
            <div className="bg-gray-100 py-[30px] dark:bg-red-200">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center px-[20px] relative">
                        <input
                            type="text"
                            className="w-[500px] px-[40px] py-[10px] rounded-md outline-none text-gray-500"
                            placeholder="Search for a country..."
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <CiSearch className="w-[20px] h-[20px] ml-[15px] absolute left-[10px] text-gray-500" />
                    </div>
                    <div className="dropdown">
                        <li>Africa</li>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 grid grid-cols-4 gap-4 mt-4">
                {filteredData.map((country) => (
                    <div 
                        className="shadow-md bg-white flex flex-col items-center p-4 transition-transform transform hover:scale-105" 
                        key={country.cca3}
                        style={{ width: '250px', height: '350px' }}
                    >
                        <img 
                            src={country.flags.png} 
                            alt={country.flags.alt} 
                            className="w-full h-40 object-cover mb-4"
                        />
                        <h3 className="text-lg font-bold mb-2">{country.name.common}</h3>
                        <p className="text-sm">Population: {country.population.toLocaleString()}</p>
                        <p className="text-sm">Region: {country.region}</p>
                        <p className="text-sm">Capital: {country.capital ? country.capital[0] : "N/A"}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
