import FeaturedMovie from "@/Components/Moonton/FeaturedMovie";
import MovieCard from "@/Components/Moonton/MovieCard";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";
import Flickity from "react-flickity-component";

export default function Dashboard() {
    const flickityRef = useRef(null);
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    }

    useEffect(() => {
        // wait for the component to mount and for the element to load before initializing Flickity
        if (flickityRef.current) {
            flickityRef.current.on('ready', function () {
                console.log('Flickity is ready');
            });
        }
    }, [flickityRef])

    return (
        <Authenticated>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity
                    className="gap-[30px]"
                    options={flickityOptions}
                    elementType="div"
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => flickityRef.current = c}
                >
                    {Array(10).fill().map((_, i) => {
                        return (
                            <FeaturedMovie key={i} 
                                slug="watching-the-bat-man-in-love"
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
                <Flickity className="__scroll-selector" options={flickityOptions}
                    elementType="div"
                    disableImagesLoaded={false}
                    reloadOnUpdate
                    static
                    flickityRef={(c) => flickityRef.current = c}
                >
                    {Array(10).fill().map((_, i) => {
                        return (
                            <MovieCard
                                key={i}
                                name={`Movie ${i}`}
                                category="Action • Love"
                                thumbnail="/images/browse-1.png"
                                slug={`watching-movie-${i}`}
                            />
                        )
                    })}
                </Flickity>
            </div>
        </Authenticated>
    )
}