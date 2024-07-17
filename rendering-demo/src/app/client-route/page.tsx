"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

const ClientRoutePage = () => {
  const theme = useTheme();
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Hello</h1>
      <ImageCarousel />
      <h1>Client Side: {clientSideFunction()}</h1>
    </div>
  );
};

export default ClientRoutePage;
