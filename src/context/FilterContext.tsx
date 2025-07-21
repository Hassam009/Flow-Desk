import React, { createContext, useContext, useEffect, useState } from "react";

interface FilterContextType {
  TaskstatusFilter: string | null;
  UserstatusFilter: string | null;
  priorityFilter: string | null;
  roleFilter:string |null;
  selectedLabels: { [key: string]: string };
  setSelectedLabel: (labelKey: string, value: string) => void;
  setTaskStatusFilter: (val: string | null) => void;
  setUserStatusFilter: (val: string | null) => void;
  setPriorityFilter: (val: string | null) => void;
  setRoleFilter:(val:string | null)=>void; 
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);


export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedLabels, setSelectedLabels] = useState<{ [key: string]: string }>(() => {
        const stored = localStorage.getItem("selectedLabels");
        return stored ? JSON.parse(stored) : {
          Status: "Status",
          Priority: "Priority",
          Role: "Role",
        };
      });
      
      const setSelectedLabel = (labelKey: string, value: string) => {
        const updated = { ...selectedLabels, [labelKey]: value };
        setSelectedLabels(updated);
        localStorage.setItem("selectedLabels", JSON.stringify(updated));
      };
      
  const [TaskstatusFilter, setTaskStatusFilterState] = useState<string | null>(() =>
    localStorage.getItem("TaskstatusFilter")
  );
  const [UserstatusFilter, setUserstatusFilter] = useState<string | null>(() =>
    localStorage.getItem("UserstatusFilter")
  );
  const [priorityFilter, setPriorityFilterState] = useState<string | null>(() =>
    localStorage.getItem("priorityFilter")
  );
  const [roleFilter, setRoleFilterState] = useState<string | null>(() =>
    localStorage.getItem("roleFilter")
  );

  useEffect(() => {
    localStorage.setItem("TaskstatusFilter", TaskstatusFilter ?? "");
  }, [TaskstatusFilter]);
  useEffect(() => {
    localStorage.setItem("UserstatusFilter", UserstatusFilter ?? "");
  }, [UserstatusFilter]);

  useEffect(() => {
    localStorage.setItem("priorityFilter", priorityFilter ?? "");
  }, [priorityFilter]);

  useEffect(() => {
    localStorage.setItem("roleFilter", roleFilter ?? "");
  }, [roleFilter]);

  const setTaskStatusFilter = (val: string | null) => setTaskStatusFilterState(val);
  const setUserStatusFilter = (val: string | null) => setUserstatusFilter(val);
  const setPriorityFilter = (val: string | null) => setPriorityFilterState(val);
  const setRoleFilter = (val: string | null) => setRoleFilterState(val);

  return (
    <FilterContext.Provider
      value={{ TaskstatusFilter,UserstatusFilter, priorityFilter,roleFilter,selectedLabels,setUserStatusFilter, setSelectedLabel,setRoleFilter, setTaskStatusFilter, setPriorityFilter }}
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
