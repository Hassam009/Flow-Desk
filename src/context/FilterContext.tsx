import React, { createContext, useContext, useEffect, useState } from "react";

interface FilterContextType {
  statusFilter: string | null;
  priorityFilter: string | null;
  roleFilter:string |null;
  setStatusFilter: (val: string | null) => void;
  setPriorityFilter: (val: string | null) => void;
  setRoleFilter:(val:string | null)=>void; 
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [statusFilter, setStatusFilterState] = useState<string | null>(() =>
    localStorage.getItem("statusFilter")
  );
  const [priorityFilter, setPriorityFilterState] = useState<string | null>(() =>
    localStorage.getItem("priorityFilter")
  );
  const [roleFilter, setRoleFilterState] = useState<string | null>(() =>
    localStorage.getItem("roleFilter")
  );

  useEffect(() => {
    localStorage.setItem("statusFilter", statusFilter ?? "");
  }, [statusFilter]);

  useEffect(() => {
    localStorage.setItem("priorityFilter", priorityFilter ?? "");
  }, [priorityFilter]);

  useEffect(() => {
    localStorage.setItem("roleFilter", roleFilter ?? "");
  }, [roleFilter]);

  const setStatusFilter = (val: string | null) => setStatusFilterState(val);
  const setPriorityFilter = (val: string | null) => setPriorityFilterState(val);
  const setRoleFilter = (val: string | null) => setRoleFilterState(val);

  return (
    <FilterContext.Provider
      value={{ statusFilter, priorityFilter,roleFilter,setRoleFilter, setStatusFilter, setPriorityFilter }}
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
