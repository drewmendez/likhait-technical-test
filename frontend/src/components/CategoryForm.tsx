/**
 * Form component for adding categories
 */

import React from "react";
import { CategoryFormData } from "../types";
import { TextField, Button } from "../vibes";
import { useCategoryForm } from "../hooks/useCategoryForm";

interface CategoryFormProps {
  onSubmit: (data: CategoryFormData) => Promise<void>;
  onCancel?: () => void;
  submitLabel?: string;
}

export function CategoryForm({
  onSubmit,
  onCancel,
  submitLabel = "Add Category",
}: CategoryFormProps) {
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useCategoryForm({ onSubmit });

  const formStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.5rem",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <TextField
        label="Name"
        type="text"
        placeholder="Enter category name"
        value={formData.name}
        error={errors.name}
        onChange={(e) => handleChange("name", e.target.value)}
        fullWidth
      />

      <div style={buttonGroupStyle}>
        <Button
          type="submit"
          variant="primary"
          fullWidth={true}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : submitLabel}
        </Button>
        {onCancel && (
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
}
