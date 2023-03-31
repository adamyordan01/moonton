import FeaturedMovie from "@/Components/Moonton/FeaturedMovie";
import MovieCard from "@/Components/Moonton/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }
    return (
        <Authenticated>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {Array(10).fill().map((_, i) => {
                        return (
                            <FeaturedMovie key={i} 
                                slug="/watching-the-bat-man-in-love"
                                name="The Batman in Love"
                                category="Action • Love"
                                thumbnail="/images/featured-1.png"
                                rating={4.5}
                            />
                        )
                    })}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mt-5 mb-4">Browse</div>
                <Flickity className="__scroll-selector" options={flickityOptions}>
                    {Array(10).fill().map((_, i) => {
                        return (
                            <MovieCard
                                key={i}
                                name={`Movie ${i}`}
                                category="Action • Love"
                                thumbnail="/images/browse-1.png"
                                slug={`/watching-movie-${i}`}
                            />
                        )
                    })}
                </Flickity>
            </div>
        </Authenticated>
        // Desktop Only
        // <>
        //     <div className="mx-auto max-w-screen hidden lg:block">
        //         {/* START: Sidebar */}
                
        //         {/* END: Sidebar */}

        //         {/* START: Content */}
        //         <div className="ml-[300px] px-[50px]">
        //             <div className="py-10 flex flex-col gap-[50px]">
        //                 {/* Topbar */}
                        
        //                 {/* /Topbar */}

        //                 {/* Featured */}
                        
        //                 {/* /Featured */}

        //                 {/* Browse */}
                        
        //                 {/* /Continue Watching */}

        //             </div>
        //         </div>
        //         {/* END: Content */}
        //     </div>

        //     <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
        //         <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
        //             Sorry, this page only supported on 1024px screen or above
        //         </div>
        //     </div>
        // </>
    )
}