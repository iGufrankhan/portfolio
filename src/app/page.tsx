import Achievements from "./Achievements/page";
import Blogs from "./Components/blog";

import Hero from "./Components/Hero";  
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
