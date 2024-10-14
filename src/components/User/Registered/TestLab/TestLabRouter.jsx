import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import SideBar from "../../../SideBar/SideBar";
import { faCheckCircle, faCog, faFileMedical, faHourglassHalf, faHourglassStart, faNotesMedical, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { faAdjust } from "@fortawesome/free-solid-svg-icons/faAdjust";
import TestLabMainPage from "./TestLabMainPage";
import CompletedTest from "./CompletedTest";
import RunningTest from "./RunningTest";
import PendingTest from "./PendingTest";
import { SettingMainPage } from "./Settings";
const TestLabCommonDiv = () => {
  return (
    <div className="flex">
      <div className="w-[20%]">
        <SideBar
          className="col-start-1"
          navElements={[
            { name: "Test Lab", url: "", icon: faUser },
            { name: "Pending Test", url: "/testlab/pending", icon: faHourglassHalf },
            { name: "Running Test", url: "/testlab/running", icon: faSpinner },
            { name: "Completed Test", url: "/testlab/completed", icon: faCheckCircle },
            { name: "Settings", url: "/testlab/settings", icon: faCog },
          ]}
        />
      </div>
      <div className="w-[80%] p-2">
      common section
        <Outlet />
        
      </div>
    </div>
  );
};

export default function TestLabRouter() {
  return (
    <>
      <Routes>
        <Route path="" element={<TestLabCommonDiv />}>
            <Route path="" element={<TestLabMainPage/>}/>
            <Route path="completed" element={<CompletedTest/>}/>
            <Route path="running" element={<RunningTest/>}/>
            <Route path="pending" element={<PendingTest/>}/>
            <Route path="settings">
                <Route path="" element={<SettingMainPage/>}/>
            </Route>
        </Route>
      </Routes>
    </>
  );
}
