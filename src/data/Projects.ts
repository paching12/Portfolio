import type { Project } from "@shared/types/Project";
import reactQuizz from "./../assets/reactquizz.png";
import EVMS from "./../assets/EVMS.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "Projects.EVMS",
    description: "Projects.EVMSDescription",
    image: EVMS,
    link: "https://github.com/paching12/EmbeddedSystem-",
    tags: ["C", "C++", "Raspberry Pi", "LTE", "IoT", "sockets"],
  },
  {
    id: 2,
    title: "Projects.reactQuizz",
    description: "Projects.reactQuizzDescription",
    image: reactQuizz,
    link: "https://paching12.github.io/ReactQuiz/",
    tags: ["React", "Redux", "TypeScript", "JavaScript", "HTML 5", "CSS 3", "Hooks", "Context API", "Reducers", "Localstorage"],
  },
  {
    id: 3,
    title: "Projects.reactQuizz",
    description: "Projects.reactQuizzDescription",
    image: reactQuizz,
    link: "",
  },
];
