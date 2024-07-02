import { cn } from "@/lib/utils"

export interface DropdownProps {
    options: string[]
    value: string
    onChange: (value: string) => void
    className?: string
}

const Dropdown = ({ options, value, onChange, className }: DropdownProps) => {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={cn(
                "flex h-10 w-1/3 rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:opacity-50 dark:bg-[#0D203D] dark:text-white",
                 className
            )}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export { Dropdown }