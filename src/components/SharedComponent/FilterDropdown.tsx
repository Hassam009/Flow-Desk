import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Item {
  label: string;
  icon: ReactNode;
}

interface FilterDropdownProps {
  key:string
  label: string;           
  items: Item[];
  onSelect: (label: string) => void;
}

export function FilterDropdown({ label, items, onSelect }: FilterDropdownProps) {
  const selectedItem = items.find(item => item.label === label);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          {selectedItem?.icon}
          {label}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="bg-white border border-gray-200 shadow-md"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.label} onClick={() => onSelect(item.label)}>
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
