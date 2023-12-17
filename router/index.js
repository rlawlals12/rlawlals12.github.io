import { createWebHistory, createRouter } from "vue-router";
import LogInComp from "../components/LogInComp";
import ResumeComp from "../components/ResumeComp";
import SelfIntroComp from "../components/SelfIntroComp";
import ProjectComp1 from "../components/ProjectComp1";
import ProjectComp2 from "../components/ProjectComp2";
import ProjectComp3 from "../components/ProjectComp3";
import ContestComp1 from "../components/ContestComp1";
import ContestComp2 from "../components/ContestComp2";
import ContestComp3 from "../components/ContestComp3";
import CareerComp1 from "../components/CareerComp1";
import CareerComp2 from "../components/CareerComp2";
import CareerComp3 from "../components/CareerComp3";
const routes = [
    { path: "/", component: LogInComp },
    { path: "/resume", component: ResumeComp },
    { path: "/selfintro", component: SelfIntroComp },
    { path: "/project1", component: ProjectComp1 },
    { path: "/project2", component: ProjectComp2 },
    { path: "/project3", component: ProjectComp3 },
    { path: "/contest1", component: ContestComp1 },
    { path: "/contest2", component: ContestComp2 },
    { path: "/contest3", component: ContestComp3 },
    { path: "/career1", component: CareerComp1 },
    { path: "/career2", component: CareerComp2 },
    { path: "/career3", component: CareerComp3 },
  ];
  
  const router = createRouter({
    // 라우트 생성
    history: createWebHistory(),
    routes,
  });
  
  export default router;