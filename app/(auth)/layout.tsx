import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion",
  description: "Horizon is a modern banking platform for everyone.",
  icons: { icon: "/icons/logo.svg" },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
