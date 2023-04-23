import { createSelector } from "@reduxjs/toolkit";

export const selectSalary = state => state.personalPlan.salary;
export const selectPassiveIncome = state => state.personalPlan.passiveIncome;
export const selectSavings = state => state.personalPlan.savings;
export const selectCost = state => state.personalPlan.cost;
export const selectFootage = state => state.personalPlan.footage;
export const selectProcent = state => state.personalPlan.procent;
export const selectYear = state => state.personalPlan.year;
export const selectMonth = state => state.personalPlan.month;
export const selectIsPersonalPlanExists = state => state.personalPlan.isPersonalPlanExists;

export const selectPlan = createSelector([selectSalary, selectPassiveIncome, selectSavings, selectCost, selectFootage, selectProcent],
(salary,
            passiveIncome,
            savings,
            cost,
            footage,
    procent) => ({salary,
            passiveIncome,
            savings,
            cost,
            footage,
            procent}));