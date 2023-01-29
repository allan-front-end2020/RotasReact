import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contatc";

//1-configurando o router
import { createBrowserRouter, RouterProvider , Navigate } from "react-router-dom";
import { Project } from "./routes/Project";
import { ErrorPage } from "./routes/ErrorPage";
import { ContactDetais } from "./routes/ContactDetais";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/project",
//     element: <Project />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
         path: "/contact",
         element: <Contact/>,
       },
       {
         path: "/project",
         element: <Project />,
       },
       // rotas alinhadas
       // que recebe algum do banco de dados
       // e vai ser carregado de acordo com a rederização
       {
        path: "/contact/:id",
        element: <ContactDetais />
       },
       {
        //NAVIGATE PARA PAGINAS NÃO EXISTENTES
          path:'oldcontact',
          element: <Navigate to='home'/>
       }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* router é um props do component RouterProvider que vem nativo */}
    {/* e passamos o{router}  que é a conts que criamos a cima comos caminhos */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
