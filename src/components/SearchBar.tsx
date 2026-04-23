import { type ChangeEvent, type SubmitEvent, type Dispatch, type SetStateAction, useState } from "react";

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
        <form
            onSubmit={onSubmit}>
            <input onChange={onChange} />
            <button type={"submit"}>검색</button>
        </form>
    );
}
export default SearchBar;
