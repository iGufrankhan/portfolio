import achievements from "./achievements/page";
import Blogs from "./components/blog";

import Hero from "./components/Hero";  
import Newletter from "./components/newletter";
import Projects from "./components/projects";


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
