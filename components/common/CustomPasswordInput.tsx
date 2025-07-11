import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";

interface Props<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	placeholder: string;
	autocomplete: any;
}

export default function CustomPasswordInput<T extends FieldValues>({ name, placeholder, autocomplete, control }: Props<T>) {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormControl>
						<div className="relative">
							<Input
								className='focus-visible:ring-transparent border-0 shadow-none border-b-2 rounded-none'
								type={showPassword ? 'text' : 'password'}
								placeholder={placeholder}
								autoComplete={autocomplete}
								{...field}
							/>
							<Button
								type="button"
								variant="ghost"
								size="sm"
								className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<EyeOff className="h-4 w-4" />
								) : (
									<Eye className="h-4 w-4" />
								)}
							</Button>
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	)
}
