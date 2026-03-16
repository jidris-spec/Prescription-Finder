import React from "react";
import { AuthProvider } from "@/context/AuthContext.jsx";
import { ThemeProvider } from "@/components/common/theme-provider";
import { Toaster } from "sonner";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AuthProvider>{children}</AuthProvider>
      <Toaster richColors position="top-right" />
    </ThemeProvider>
  );
}
