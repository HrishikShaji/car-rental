import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface Props<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	type: string;
	placeholder: string;
	autocomplete: any;
}

export default function CustomInput<T extends FieldValues>({ name, type, placeholder, autocomplete, control }: Props<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className='focus:outline-none focus-visible:outline-none'>
					<FormControl >
						<Input
							className='focus-visible:ring-transparent border-0 shadow-none border-b-2 rounded-none'
							type={type}
							placeholder={placeholder}
							autoComplete={autocomplete}
							{...field}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
