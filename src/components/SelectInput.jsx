import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function SelectInput({
  placeholder = "select",
  label,
  children,
  className,
  handleFunc,
}) {
  return (
    <Select onValueChange={(value) => handleFunc(value)}>
      <SelectTrigger
        className={className || "border border-pgreen rounded-[6px] h-[64px]"}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="overflow-y-scroll max-h-80 w-full z-[2000]">
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {children}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectInput;
