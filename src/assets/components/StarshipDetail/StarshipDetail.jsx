import React, { useState, useEffect } from 'react';
import { fetchStarshipDetails } from '../../../services/starship-service/index';
import shipImage from '../../../../public/star-destroyer.png';
import './style.css';

const StarshipDetail = ({ starshipUrl, onBack }) => {
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const loadStarship = async () => {
            try {
                const id = starshipUrl.split('/').filter(Boolean).pop();
                if (!id) throw new Error("Invalid starship URL or ID.");
                const data = await fetchStarshipDetails(id);
                setStarship(data);
            } catch (error) {
                console.error("Error loading starship:", error);
            }
        };
        loadStarship();
    }, [starshipUrl]);
    

    if (!starship) return <p>Loading...</p>;

    return (
        <div className='container'>
            <div className='item-container'>
                <img src={shipImage} alt={starship.name} />
                <div className='details'>
                    <h2>{starship.name}</h2>
                    <p><span>Model:</span> {starship.model}</p>
                    <p><span>Yolcu Sayısı:</span> {starship.passengers}</p>
                    <p><span>Maksimum Hız:</span> {starship.max_atmosphering_speed}</p>
                    <p><span>Üretici:</span> {starship.manufacturer}</p>
                    <p><span>Mürettebat:</span> {starship.crew}</p>
                    <p><span>Kargo Kapasitesi:</span> {starship.cargo_capacity}</p>
                </div>
            </div>
            <button onClick={onBack}>Geri Dön</button>

        </div>
    );
};

export default StarshipDetail;
