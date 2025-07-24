import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Item {
  label: string;
  icon: ReactNode;
}

interface FilterDropdownProps {
  label: string;
  items: Item[];
  onSelect: (label: string) => void;
}

export function FilterDropdown({ label, items, onSelect }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const selectedItem = items.find((item) => item.label === label);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          {selectedItem?.icon}
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-400 ${
              open ? "rotate-180" : ""
            }`}
          />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="bg-white border border-gray-200 shadow-md"
      >
        {items.map((item) => (
          <DropdownMenuItem
            key={item.label}
            onClick={() => {
              onSelect(item.label);
              setOpen(false);
            }}
          >
            {item.icon}
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
