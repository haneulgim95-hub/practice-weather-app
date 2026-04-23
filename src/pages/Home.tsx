import SearchBar from "../components/SearchBar.tsx";
import Weather from "../components/Weather.tsx";
import styled from "styled-components";
import { useState } from "react";
import GlobalStyle from "../styles/GlobalStyle.ts";

const Wrap = styled.div`
    padding: 30px;
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    background-color: #f5f7fb;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

function Home() {
    const [city, setCity] = useState("Seoul");

    return (
        <>
            <GlobalStyle />
            <Wrap>
                <SearchBar onSearch={setCity} />
                <Weather city={city} />
            </Wrap>
        </>
    );
}

export default Home;
