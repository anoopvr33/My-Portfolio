import ContactSection from "@/components/contact/page";
import DarkMode from "@/components/darkmode/page";
import EducationExperience from "@/components/education/page";
import PortfolioWelcome from "@/components/hero/page";
import ProjectsSection from "@/components/project/page";
import SkillsSection from "@/components/skills/page";
import BackgroundBlur from "../components/BackgroundBlur.jsx";
import ScrollStack from "../components/scroll.jsx";

export default function Home() {
  return (
    <div>
      <PortfolioWelcome
        name="ANOOP V R"
        designation="Full Stack Developer"
        about=" I build digital experiences that blend creativity with functionality. As
        a Full-Stack Developer, I enjoy turning ideas into scalable,
        interactive, and user-friendly applications — from crafting clean
        frontend interfaces to engineering powerful backend systems. I’m
        passionate about modern web technologies, problem-solving, and creating
        products that leave a lasting impact."
        profileImage="/mypic23.jpg"
      ></PortfolioWelcome>
      <SkillsSection></SkillsSection>

      {/* <ScrollStack></ScrollStack> */}

      <ProjectsSection></ProjectsSection>
      <EducationExperience></EducationExperience>
      <ContactSection></ContactSection>
      <BackgroundBlur></BackgroundBlur>
      {/* <DarkMode></DarkMode> */}
      {/* re_Pb9ERGJ9_ArB8NQzcQ3JkBbrphPysWh5M */}
    </div>
  );
}
