import React from "react";
import ChangePage from "./ChangePage";
import { useLocation, useNavigate } from "react-router-dom";

export default function ChangeWrapperPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const validPaths = [
    "/pizza",
    "/pizza/valuepizza",
    "/pizza/pan",
    "/pizza/crispythin",
    "/pizza/extreme",
    "/pizza/nympizza",
    "/pizza/newyorkpizza",
    "/pizza/all",
    "/puff",
    "/puff/:id",
    "/value-set",
    "/appetizers",
    "/chicken",
    "/pasta",
    "/salad",
    "/drinks-and-desserts",
  ];

  const isValidPath = validPaths.some((path) => {
    const regex = new RegExp(`^${path.replace(/:\w+/g, "\\w+")}$`);
    return regex.test(location.pathname);
  });

  React.useEffect(() => {
    if (!isValidPath) {
      navigate("/error/404");
    }
  }, [isValidPath, navigate]);

  return isValidPath ? <ChangePage /> : null;
}
