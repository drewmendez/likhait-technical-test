import { useState, useEffect } from "react";
import { Category } from "../types";
import { fetchCategories } from "../services/api";

export function useFetchCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        setIsCategoriesLoading(true);
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsCategoriesLoading(false);
      }
    };
    fetchCategoriesData();
  }, []);

  return { categories, isCategoriesLoading };
}
