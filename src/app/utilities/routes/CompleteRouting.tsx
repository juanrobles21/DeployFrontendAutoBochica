import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainBoard } from "../../containers/MainBoard";
import { Welcome } from "../../containers/Welcome";
import { Login } from "../../views/public/Login";

import { NotFound } from "../../views/shared/NotFound";

const LazyLogin=lazy(()=>import("../../views/public/Login").then(()=>({default:Login})));
const LazyNotFound=lazy(()=>import("../../views/shared/NotFound").then(()=>({default:NotFound})));
const LazyMainBoard=lazy(()=>import("../../containers/MainBoard").then(()=>({default:MainBoard})));

export const CompleteRouting = () => {
    return (
    <Routes>
      <Route path="/" element={<LazyLogin/>}/>
      <Route path="/home/*" element={<LazyMainBoard/>}/>
      <Route path="*" element={<LazyNotFound/>}/>
    </Routes>);
  };