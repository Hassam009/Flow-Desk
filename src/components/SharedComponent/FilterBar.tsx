import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterDropdown } from "./FilterDropdown";
import { ReactNode, useEffect, useState } from "react";

interface FilterConfig {
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
  onClear: () => void;
}

const STORAGE_KEY = "task_filters";

export function FilterBar({ placeholder, filterConfigs, onClear }: FilterBarProps) {
  const defaultLabels = Object.fromEntries(filterConfigs.map(f => [f.label, f.label]));

  const [selectedLabels, setSelectedLabels] = useState<{ [key: string]: string }>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return defaultLabels;
      }
    }
    return defaultLabels;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedLabels));
  }, [selectedLabels]);

  const handleSelect = (filterLabel: string, selected: string) => {
    setSelectedLabels(prev => {
      const updated = { ...prev, [filterLabel]: selected };
      return updated;
    });

    const filter = filterConfigs.find(f => f.label === filterLabel);
    filter?.onSelect(selected);
  };

  const handleClear = () => {
    setSelectedLabels(defaultLabels);
    localStorage.removeItem(STORAGE_KEY);
    onClear();
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
      <Input placeholder={placeholder} className="max-w-xs w-full sm:w-auto" />

      {filterConfigs.map(filter => (
        <FilterDropdown
          key={filter.label}
          label={selectedLabels[filter.label]}
          items={filter.items}
          onSelect={selected => handleSelect(filter.label, selected)}
        />
      ))}

      <Button variant="outline" className="w-full sm:w-auto" onClick={handleClear}>
        Clear Filters
      </Button>
    </div>
  );
}
