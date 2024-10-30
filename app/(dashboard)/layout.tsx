import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const Dashboardlayout=({children}:{children:React.ReactNode})=>{
    return(
        <div className="h-full ">
            <div className="hidden h-full md:flex md:w-72 md:flex-col  md:fixed  bg-gray-700">
                <Sidebar/>
            </div>
            <main className="md:ml-72">
                <Navbar/>
                {children}
            </main>
            
        </div>
    )
}
export default Dashboardlayout;