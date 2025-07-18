import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FilterDropdown } from "./FilterDropdown"
import { ReactNode } from 'react';

interface FilterConfig {
  label: string
  items: {
    label: string
    icon: ReactNode
  }[]
  onSelect: (label: string) => void
}

interface FilterBarProps {
  placeholder?: string
  filterConfigs: FilterConfig[]
  onClear: () => void
}

export function FilterBar({ placeholder, filterConfigs, onClear }: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 w-full">
      <Input placeholder={placeholder} className="max-w-xs w-full sm:w-auto" />

      {filterConfigs.map((filter) => (
        <FilterDropdown
          key={filter.label}
          label={filter.label}
          items={filter.items}
          onSelect={filter.onSelect}
        />
      ))}

      <Button variant="outline" className="w-full sm:w-auto" onClick={onClear}>
        Clear Filters
      </Button>
    </div>
  )
}
