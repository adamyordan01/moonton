import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";


export default function Index({ auth }) {

    return (
        <Authenticated auth={auth}>
            <Head title="List of movie" />

            <FlashMessage className="mb-5" />

            <Link href="/admin/movie/create">
                <PrimaryButton>
                    Insert new movie
                </PrimaryButton>
            </Link>
        </Authenticated>
    )
}