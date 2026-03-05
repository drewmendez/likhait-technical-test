/**
 * Custom hook for managing category form state and validation
 */

import { useState } from "react";
import { CategoryFormData } from "../types";

interface UseCategoryFormProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
}

export function useCategoryForm({ onSubmit }: UseCategoryFormProps) {
  const [formData, setFormData] = useState<CategoryFormData>({
    name: "",
  });

  const [errors, setErrors] = useState<Partial<CategoryFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof CategoryFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value })); // Spread previous data in case we add more fields later (eg. description, etc.)
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined })); // Spread previous errors in case we add more fields later (eg. description, etc.)
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CategoryFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Category name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({ name: "" });
      setErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      setErrors((prev) => ({ ...prev, name: message })); // Spread previous errors in case we add more fields later (eg. description, etc.)
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "" });
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
