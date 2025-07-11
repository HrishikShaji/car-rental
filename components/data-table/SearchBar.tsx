import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Input } from "../ui/input";

interface Props {
	onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: Props) {
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		const timer = setTimeout(() => {
			onChange(searchValue)
		}, 500)
		return () => clearTimeout(timer)
	}, [searchValue])

	return (
		<Input
			placeholder="Search listings..."
			value={searchValue}
			onChange={(event) => setSearchValue(event.target.value)}
			className="max-w-sm"
		/>
	)
}
