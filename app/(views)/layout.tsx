import { Navbar } from "@/components";

export default function ViewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-4">
        <span className="text-xl">Hello Root Layout Views</span>
        {children}
      </main>
    </>
  );
}
