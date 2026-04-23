import { useEffect, useState } from "react";
import styled from "styled-components";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherType = {
    name: string;
    weather: [
        {main: string}
    ];
    main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
    wind: {
        speed: number;
    };
};

const Wrap = styled.div`
    border: 1px solid #dfdfdf;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    background-color: white;
`;

const City = styled.h2`
    margin-bottom: 6px;
`;

function Weather({ city }: { city: string }) {
    const [data, setDate] = useState<WeatherType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then((json: WeatherType) => {
                setDate(json);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });
    }, [city]);

    if (loading) return <div>Loading...</div>
    if (!data) return <div>날씨 데이터를 불러오지 못했습니다.</div>

    return (
        <Wrap>
            <City>{data.name}</City>
            <div>{Math.round(data.main.temp)}°C</div>
            <div>{data.weather[0].main}</div>

            <div>
                <div>Feels like : {Math.round(data.main.feels_like)}°C</div>
                <div>Humidity : {data.main.humidity}%</div>
                <div>Wind: {data.wind.speed} m/s</div>
            </div>
        </Wrap>
    );
}
export default Weather;
