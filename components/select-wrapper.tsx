import { Select } from "@chakra-ui/react";

const SelectWrapper: React.VFC<SelectWrapperProps> = ({ items, selected, handleChange }) => {
    return (
        <Select value={selected} onChange={handleChange}>
            <option value="">指定なし</option>
            {items.map((item, index) => <option key={`select-${index}`} value={item}>{item}</option>)}
        </Select>
    )
}

export default SelectWrapper;