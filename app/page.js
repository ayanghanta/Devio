import Hero from "@/app/_components/ui/Hero";
import HomeBlogs from "@/app/_components/blog/HomeBlogs";

function page() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <HomeBlogs />
    </div>
  );
}

export default page;
