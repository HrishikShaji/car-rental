import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface Props {
	value: string;
	onValueChange: (value: string) => void;
	items: { name: string; value: string }[];
	placeholder: string;
}

export default function DropdownFilter({ items, placeholder, value, onValueChange }: Props) {
	return (
		<Select
			value={value}
			onValueChange={onValueChange}
		>
			<SelectTrigger className="w-[140px]">
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent>
				{items.map((item, i) => (
					<SelectItem value={item.value} key={i}>{item.name}</SelectItem>
				))}
			</SelectContent>
		</Select>

	)
}
