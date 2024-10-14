import React from "react"
import TopHeader from "../../Header/TopHeader"
import SideBar from "../../SideBar/SideBar"
import { faCar,faClose } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./SearchBar"
import GuestHeader from "../../Header/GuestHeader"
export default function NonRegisteredMainPage() {
    return (
        <div className="flex flex-col gap-3">
        {/* <div className="w-[20%]">
        <SideBar navElements={[
        {name:'first component',url:'/user/first', icon:faCar},
        {name:'second component',url:'/user/second', icon:faClose},
        {name:'second component',url:'/user/second', icon:faClose}
        ]}/>
        </div>
        <div className="w-[80%]">
        Guest Page
        </div> */}
        <GuestHeader/>
        <h1>This is Guest Page</h1>
        </div>
    )
}