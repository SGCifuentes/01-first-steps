"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ILink = {
  item: { text: string; path: string };
};

export const CustomLink = ({ item }: ILink) => {
  const path = usePathname();

  return (
    <Link href={item.path} className={path === item.path ? "underline" : ""}>
      {item.text}
    </Link>
  );
};
