import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

type WeatherType = {
    name: string;
    main: {
            temp: number;
            feels_like: number;
            humidity: number;
        };
    wind: {
        speed: number;
    };
};

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
        <div>
            <h2>{data.name}</h2>
            <div>{Math.round(data.main.temp)}°C</div>
        </div>
    );
}
export default Weather;
