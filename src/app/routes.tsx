import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shotokan } from "./pages/Shotokan";
import { Dojos } from "./pages/Dojos";
import { Schedule } from "./pages/Schedule";
import { Gallery } from "./pages/Gallery";
import { Events } from "./pages/Events";
import { FAQ } from "./pages/FAQ";
import { Graduations } from "./pages/Graduations";
import { Resources } from "./pages/Resources";
import { Enrollment } from "./pages/Enrollment";
import { Contact } from "./pages/Contact";
import { Partners } from "./pages/Partners";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre", Component: About },
      { path: "shotokan", Component: Shotokan },
      { path: "dojos", Component: Dojos },
      { path: "horarios", Component: Schedule },
      { path: "galeria", Component: Gallery },
      { path: "eventos", Component: Events },
      { path: "iniciacao", Component: FAQ },
      { path: "graduacoes", Component: Graduations },
      { path: "recursos", Component: Resources },
      { path: "inscricao", Component: Enrollment },
      { path: "contacto", Component: Contact },
      { path: "parceiros", Component: Partners },
    ],
  },
]);
