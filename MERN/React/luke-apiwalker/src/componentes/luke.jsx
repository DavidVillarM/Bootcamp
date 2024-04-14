import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/luke.css";


const LukePage = () => {
    const [dataPeople, setDataPeople] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [inputId, setInputId] = useState("");

    const fetchPeople = async (id) => {
        try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        const data = response.data;
        setDataPeople(data);
        } catch (error) {
        console.error("Error", error);
        responseError();
        }
    };
    const responseError = () => {
        return (
        <div className="content_error">
            <h1>Estos no son los droides que está buscando</h1>
            <img
            className="img_sky"
            src="https://lumiere-a.akamaihd.net/v1/images/62bf0e03e8459d0001f4881b-image_71900d89.jpeg?region=192%2C0%2C1152%2C864"
            alt="obikenobi"
            />
        </div>
        );
    };
    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputId = (event) => {
        setInputId(event.target.value);
    };
    const handleSearch = () => {
        if (selectedOption === "people") {
        fetchPeople(inputId);
        }
        console.log("DATA people ", dataPeople);
    };

    const renderDetails = () => {
        if (!selectedOption) return null;
        if (!inputId) return null;
        if (!dataPeople) return null;
        switch (selectedOption) {
        case "people":
            return (
            <div className="person-details">
                <h2>{dataPeople.name}</h2>
                <p>Birth Year: {dataPeople.birth_year}</p>
                <p>Height: {dataPeople.height}</p>
                <p>Hair Color: {dataPeople.hair_color}</p>
                <p>Homeworld: {dataPeople.homeworld}</p>
            </div>
            );

        default:
            return (
            <div>
                <h2>Detalles Próximamente</h2>
            </div>
            );
        }
    };
    return (
        <div>
        <div className="nav">
            <div>
            <span>Search for: </span>
            <select value={selectedOption} onChange={handleChange}>
                <option value="">Select an option</option>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="starships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            </div>
            <div>
            <span>Id:</span>
            <input value={inputId} onChange={handleInputId} className="inputId" />
            <button onClick={handleSearch}>Search</button>
            </div>
        </div>
        {dataPeople && renderDetails()}
        </div>
    );
};

export default LukePage;