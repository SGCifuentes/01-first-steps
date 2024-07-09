import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About Page",
  keywords: ["About the world", "JeJeJe"],
};

const AboutPage = () => {
  return (
    <div>
      <span className="text-7xl">About Page</span>
    </div>
  );
};

export default AboutPage;
