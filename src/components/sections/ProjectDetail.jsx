import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { AppleProjectModal } from "../AppleProjectModal";

export const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <Navigate to="/#projects" replace />;
  }

  return (
    <AppleProjectModal
      project={project}
      onClose={() => navigate("/#projects")}
    />
  );
};