import Blogs from "./Components/blog";

import Hero from "./Components/Hero";  // <-- or your correct path
import Newletter from "./Components/newletter";
import Projects from "./Components/projects";


export default function Home() {
  return (
    <>
      <Hero />
      <Projects/>
      <Blogs />
      <Newletter />
    
    </>
  );
}
