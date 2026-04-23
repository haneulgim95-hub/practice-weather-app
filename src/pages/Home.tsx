import SearchBar from "../components/SearchBar.tsx";
import Weather from "../components/Weather.tsx";
import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    padding: 30px;
`

function Home() {
    const [city, setCity] = useState("Seoul");

    return (
        <Wrap>
            <SearchBar onSearch={setCity}/>
            <Weather city={city}/>
        </Wrap>
    );
}

export default Home;
