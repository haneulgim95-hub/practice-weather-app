import { type ChangeEvent, type SubmitEvent, type Dispatch, type SetStateAction, useState } from "react";
import styled from "styled-components";

const Box = styled.form`
    display: flex;
    gap: 6px;
    width: 100%;
`

const Button = styled.button`
    border-radius: 6px;
    padding: 12px 24px;
    border: none;
    background-color: #d5d3d3;
    font-size: 1rem;
`;

const Input = styled.input`
    flex: 1;
`;

function SearchBar({ onSearch }: { onSearch: Dispatch<SetStateAction<string>> }) {
    const [input, setInput] = useState("");

    const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        const k = input.trim();
        if (!k) return;

        onSearch(input);
    };

    const onChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
        setInput(e.target.value);

    return (
        <Box onSubmit={onSubmit}>
            <Input onChange={onChange} />
            <Button type={"submit"}>검색</Button>
        </Box>
    );
}
export default SearchBar;
