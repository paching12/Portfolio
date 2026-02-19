import type { Project } from "@shared/types/Project";
import reactQuizz from "./../assets/reactquizz.webp";
import EVMS from "./../assets/EVMS.webp";
import worldwise from "./../assets/worldwise.webp";
import todoapp from "./../assets/todoapp.webp";

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
    tags: ["React", "Mobile/Computer", "TypeScript", "JavaScript", "HTML 5", "CSS 3", "Hooks", "Context API", "Reducers", "Localstorage"],
  },
  {
    id: 3,
    title: "Projects.worldwise",
    description: "Projects.worldwiseDescription",
    image: worldwise,
    link: "https://paching12.github.io/worldwise/",
    tags: [ "Leaflet", "Computer platform", "React router", "Redux", "TypeScript", "React Datepicker", "Flag Icons" ],
  },
  {
    id: 4,
    title: "Projects.todoapp",
    description: "Projects.todoappDescription",
    image: todoapp,
    link: "https://paching12.github.io/platzi-todo-app/",
    tags: [ "React", "JavaScript", "React Render Patterns", "HOCS", "Hooks", "Context API", "Reducers", "LocalStorage" ],
  }
];
