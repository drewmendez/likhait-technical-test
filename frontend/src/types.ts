/**
 * Type definitions for the Expense Tracking System
 */

export interface Expense {
  id: number;
  amount: number;
  description: string;
  category: Category;
  date: string;
  created_at: string;
  updated_at: string;
}

export interface ExpenseFormData {
  amount: string;
  description: string;
  category_id: number | null;
  date: string;
}

export interface MonthlySummary {
  totalExpenses: number;
  categoryBreakdown: CategoryBreakdown[];
  topCategories: TopCategory[];
}

export interface CategoryBreakdown {
  category: Category;
  total: number;
  percentage: number;
}

export interface TopCategory {
  category: Category;
  total: number;
  count: number;
}

export interface DayExpenses {
  day: number;
  expenses: Expense[];
  total: number;
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface CategoryFormData {
  name: string;
}
