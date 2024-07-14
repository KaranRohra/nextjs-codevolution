"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { useTheme } from "@/components/theme-provider";

const ClientRoutePage = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Hello</h1>
      <ImageCarousel />
    </div>
  );
};

export default ClientRoutePage;
