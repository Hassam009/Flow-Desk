import React, { createContext, useContext, useEffect, useState } from "react";

type FilterKeys = "Taskstatus" | "Userstatus" | "priority" | "role";

interface FilterContextType {
  filters: Record<FilterKeys, string | null>;
  setFilter: (key: FilterKeys, value: string | null) => void;
  selectedLabels: { [key: string]: string };
  setSelectedLabel: (labelKey: string, value: string) => void;
  resetSelectedLabels: () => void;
  resetAllFilters: () => void;
}

export const defaultLabels = {
  Taskstatus: "Status",
  priority: "Priority",
  role: "Role",
  Userstatus: "Status",
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const filterKeys: FilterKeys[] = ["Taskstatus", "Userstatus", "priority", "role"];
  const userId = localStorage.getItem("currentUserId"); 


  const [filters, setFilters] = useState<Record<FilterKeys, string | null>>(() => {
    const initialState = {} as Record<FilterKeys, string | null>;
    filterKeys.forEach((key) => {
      initialState[key] = localStorage.getItem(`${userId}_${key}Filter`);
    });
    return initialState;
  });

  const setFilter = (key: FilterKeys, value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    filterKeys.forEach((key) => {
      localStorage.setItem(`${userId}_${key}Filter`, filters[key] ?? "");
    });
  }, [filters]);

  const [selectedLabels, setSelectedLabels] = useState<{ [key: string]: string }>(() => {
    const stored = localStorage.getItem(`${userId}_selectedLabels`);
    return stored ? JSON.parse(stored) : defaultLabels;
  });

  const setSelectedLabel = (labelKey: string, value: string) => {
    const updated = { ...selectedLabels, [labelKey]: value };
    setSelectedLabels(updated);
    localStorage.setItem(`${userId}_selectedLabels`, JSON.stringify(updated));
  };

  const resetSelectedLabels = () => {
    setSelectedLabels(defaultLabels);
    localStorage.setItem("selectedLabels", JSON.stringify(defaultLabels));
  };

  const resetAllFilters = () => {
    resetSelectedLabels();
    const resetState: Record<FilterKeys, string | null> = {
      Taskstatus: null,
      Userstatus: null,
      priority: null,
      role: null,
    };
    setFilters(resetState);
  };

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilter,
        selectedLabels,
        setSelectedLabel,
        resetSelectedLabels,
        resetAllFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) throw new Error("useFilter must be used inside FilterProvider");
  return context;
};
