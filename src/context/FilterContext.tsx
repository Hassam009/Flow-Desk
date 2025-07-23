import React, { createContext, useContext, useEffect, useState } from "react";

const filterKeys = ["Taskstatus", "Userstatus", "priority", "role"] as const;
type FilterKeys = typeof filterKeys[number];


interface FilterContextType {
  filters: Record<FilterKeys, string | null>;
  setFilter: (key: FilterKeys, value: string | null) => void;
  selectedLabels: { [key: string]: string };
  setSelectedLabel: (labelKey: string, value: string) => void;
  resetSelectedLabels: () => void;
  // resetAllFilters: () => void;
  resetTaskFilters: () => void;
  resetUserFilters: () => void;
}

const defaultLabels = {
  Taskstatus: "Status",
  priority: "Priority",
  role: "Role",
  Userstatus: "Status",
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const filterKeys: FilterKeys[] = ["Taskstatus", "Userstatus", "priority", "role"];
  const [userId, setUserId] = useState(() => localStorage.getItem("userID"));

  const loadFilters = (uid: string | null): Record<FilterKeys, string | null> => {
    const state = {} as Record<FilterKeys, string | null>;
    if (!uid) return state;
    filterKeys.forEach((key) => {
      state[key] = localStorage.getItem(`${uid}_${key}Filter`);
    });
    return state;
  };

  const loadLabels = (uid: string | null): { [key: string]: string } => {
    if (!uid) return defaultLabels;
    const stored = localStorage.getItem(`${uid}_selectedLabels`);
    return stored ? JSON.parse(stored) : defaultLabels;
  };

  const [filters, setFilters] = useState(() => loadFilters(userId));
  const [selectedLabels, setSelectedLabels] = useState(() => loadLabels(userId));

  const setFilter = (key: FilterKeys, value: string | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const setSelectedLabel = (labelKey: string, value: string) => {
    setSelectedLabels((prev) => ({ ...prev, [labelKey]: value }));
  };

  const resetSelectedLabels = () => {
    setSelectedLabels(defaultLabels);
  };

  // const resetAllFilters = () => {
  //   resetSelectedLabels();
  //   setFilters({
  //     Taskstatus: null,
  //     Userstatus: null,
  //     priority: null,
  //     role: null,
  //   });
  // };

  const resetTaskFilters = () => {
    resetSelectedLabels();
    setFilters((prev) => ({
      ...prev,
      Taskstatus: null,
      priority: null,
    }));
    setSelectedLabels((prev) => ({
      ...prev,
      Taskstatus: defaultLabels.Taskstatus,
      priority: defaultLabels.priority,
    }));
  };
  
  const resetUserFilters = () => {
    resetSelectedLabels();
    setFilters((prev) => ({
      ...prev,
      Userstatus: null,
      role: null,
    }));
    setSelectedLabels((prev) => ({
      ...prev,
      Userstatus: defaultLabels.Userstatus,
      role: defaultLabels.role,
    }));
  };
  

  useEffect(() => {
    if (!userId) return;
    filterKeys.forEach((key) => {
      localStorage.setItem(`${userId}_${key}Filter`, filters[key] ?? "");
    });
  }, [filters, userId]);

  useEffect(() => {
    if (!userId) return;
    localStorage.setItem(`${userId}_selectedLabels`, JSON.stringify(selectedLabels));
  }, [selectedLabels, userId]);

  // This effect keeps userId, filters, and selectedLabels in sync with localStorage.userID
  useEffect(() => {
    const syncUserId = () => {
      const current = localStorage.getItem("userID");
      setUserId(current);
      setFilters(loadFilters(current));
      setSelectedLabels(loadLabels(current));
    };

    // Run once on mount
    syncUserId();

    // Listen for storage changes (other tabs)
    window.addEventListener("storage", syncUserId);

    // Listen for userID changes in the same tab (polling or custom event)
    const interval = setInterval(() => {
      const current = localStorage.getItem("userID");
      if (current !== userId) {
        syncUserId();
      }
    }, 200); // Poll every 200ms (fast enough for UI, low CPU)

    return () => {
      window.removeEventListener("storage", syncUserId);
      clearInterval(interval);
    };
  }, [userId]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilter,
        selectedLabels,
        setSelectedLabel,
        resetSelectedLabels,
        resetTaskFilters,
        resetUserFilters
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
