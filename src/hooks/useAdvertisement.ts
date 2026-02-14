import { useState } from "react";
import { AnuncioFormData } from "../types/advertisement";

const INITIAL_STATE: AnuncioFormData = {
  images: [],
  title: "",
  price: "",
  condition: "used",
  description: "",
  selectedTags: [],
};

export function useAnuncioForm() {
  const [formData, setFormData] = useState<AnuncioFormData>(INITIAL_STATE);

  const updateField = <K extends keyof AnuncioFormData>(
    field: K,
    value: AnuncioFormData[K],
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTag = (tagId: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tagId)
        ? prev.selectedTags.filter((id) => id !== tagId)
        : [...prev.selectedTags, tagId],
    }));
  };

  const resetForm = () => {
    setFormData(INITIAL_STATE);
  };

  const isValid =
    formData.title.trim() !== "" &&
    formData.price.trim() !== "" &&
    formData.description.trim() !== "";

  return {
    formData,
    updateField,
    toggleTag,
    resetForm,
    isValid,
  };
}
