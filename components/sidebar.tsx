"use client"
import Link from "next/link";
import {Montserrat} from "next/font/google"
import { cn } from "@/lib/utils";
import { CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, Settings, VideoIcon } from "lucide-react";
const montserrat=Montserrat({weight:"600",subsets:["latin"]});
const routes=[
    {
        label:"Dashboard",
        icon:LayoutDashboard,
        href:"/dashboard",
        color:"text-sky-500"
    },
    {
        label:"Conversation",
        icon:MessageSquare,
        href:"/conversation",
        color:"text-violet-500"
    },
    {
        label:"Image Generation",
        icon:ImageIcon,
        href:"/image",
        color:"text-pink-700"
    },
    {
        label:"Video Generation",
        icon:VideoIcon,
        href:"/video",
        color:"text-orange-700"
    },
    {
        label:"Music Generation",
        icon:MusicIcon,
        href:"/music",
        color:"text-emerald-700"
    },
    {
        label:"Code Generation",
        icon:CodeIcon,
        href:"/code",
        color:"text-green-700"
    },
    {
        label:"Settings",
        icon:Settings,
        href:"/settings",
        color:"text-pink-700"
    },
]

const Sidebar=()=>{
    return(
        <div className=" py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex flex-col">
                <Link href="/dashboard" className="flex items-center  pl-3 mb-14">
                    <div className="w-8 h-8 mr-4">
                        <img src="/"/>
                    </div>
                    <h1 className= {cn("text-xl font-bold",montserrat.className)}>Genius</h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                        <Link href={route.href} className="text-sm flex p-3 w-full  font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition">
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3",route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Sidebar;