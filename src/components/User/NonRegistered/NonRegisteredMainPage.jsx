import React from "react"
import TopHeader from "../../Header/TopHeader"
import SideBar from "../../SideBar/SideBar"
import { faCar,faClose } from "@fortawesome/free-solid-svg-icons"
import SearchBar from "./SearchBar"
export default function NonRegisteredMainPage() {
    return (
        <div className="flex items-start flex-col">
            <div className="flex mx-10 mt-2 h-auto w-screen">
            <SideBar navElements={[
                {name:'sajan shrestha',url:'/user/sajan',icon:faClose},
                {name:'first component',url:'/user/first', icon:faCar},
                {name:'second component',url:'/user/second', icon:faClose},
                {name:'first component',url:'/user/first', icon:faCar},
                {name:'second component',url:'/user/second', icon:faClose},
                {name:'first component',url:'/user/first', icon:faCar},
                {name:'second component',url:'/user/second', icon:faClose}
            ]}/>
            <SearchBar/>
            </div>
        <p>This is for normal user</p>
        </div>
    )
}