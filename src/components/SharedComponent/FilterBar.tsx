import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterDropdown } from "./FilterDropdown";
import { ReactNode, useState } from "react";
import { useFilter } from "../../context/FilterContext";
interface FilterConfig {
  key: string;
  label: string;
  items: {
    label: string;
    icon: ReactNode;
  }[];
  onSelect: (label: string) => void;
}

interface FilterBarProps {
  placeholder?: string;
  filterConfigs: FilterConfig[];
  inputText: string;
  setInputText: (text: string) => void;
  onClear: () => void;
}

export function FilterBar({
  placeholder,
  filterConfigs,
  onClear,
  inputText,
  setInputText,
}: FilterBarProps) {
  const { filters, setSelectedLabel } = useFilter();

  const handleSelect = (filterKey: string, selected: string) => {
    setSelectedLabel(filterKey, selected);
    const filter = filterConfigs.find((f) => f.key === filterKey);
    filter?.onSelect(selected);
  };
  
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  

  const handleClear = () => {
    onClear();
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
      <Input
  placeholder={placeholder}
  className="max-w-xs w-full sm:w-auto"
  value={inputText}
  onChange={inputHandler}
/>

      {filterConfigs.map((filter) => (
        <FilterDropdown
          key={filter.key}
          label={filters[filter.key] || filter.label}
          items={filter.items}
          onSelect={(selected) => handleSelect(filter.key, selected)}
        />
      ))}

      <Button
        variant="outline"
        className="w-full sm:w-auto"
        onClick={handleClear}
      >
        Clear Filters
      </Button>
    </div>
  );
}
