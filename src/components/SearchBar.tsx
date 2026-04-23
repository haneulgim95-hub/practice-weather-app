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
    font-size: 1rem;
    font-weight: 600;
    background-color: #4f7cff;
    color: white;
    transition: all 0.3s;

    &:hover {
        background-color: #3a63d8;
    }
`;

const Input = styled.input`
    flex: 1;
    border-radius: 8px;
    outline: none;
    border: 1px solid #ddd;
    padding: 12px 14px;
    font-size: 14px;
    transition: all 0.2s;

    &:focus {
        border-color: #4f7cff;
        box-shadow: 0 0 0 3px rgba(79, 124, 255, 0.2);
    }
`;

type Props = { onSearch: Dispatch<SetStateAction<string>> };

function SearchBar({ onSearch }: Props) {
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
