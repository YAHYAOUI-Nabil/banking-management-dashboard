import type { Metadata } from "next";
import Image from "next/image";

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
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}

      <div className="auth-asset">
        <div className="">
          <Image
            src="/icons/auth-image.svg"
            alt="auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
