import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Inertia } from '@inertiajs/inertia'


export default function Index({ auth, movies }) {

    // delete movie using useForm
    // const { delete: destroy, processing, progress } = useForm({ _method: 'DELETE' });
    const deleteMovie = (id) => {
        if (confirm('Are you sure?')) {
            Inertia.delete(route('admin.movie.destroy', id), {
                preserveScroll: true,
                _method: 'DELETE',
            })
        }
    }

    return (
        <Authenticated auth={auth}>
            <Head title="List of movie" />

            <FlashMessage className="mb-5" />

            <Link href="/admin/movie/create">
                <PrimaryButton>
                    Insert new movie
                </PrimaryButton>
            </Link>

            <div className="flex flex-col my-5">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Is Featured</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">rating</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {
                                    // map movies
                                    movies.map((movie, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                <img src={`/storage/movie-thumbnails/${movie.thumbnail}`} alt={movie.title} className="w-28 rounded-lg" />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                <div className="flex items-center">
                                                    <div className="">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-200">{movie.title}</div>
                                                        <div className="text-sm text-gray-500 dark:text-gray-400">{movie.category}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {movie.is_featured ? 'Yes' : 'No'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {movie.rating}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                {/* make two button for action */}
                                                <div className="flex">
                                                    <Link href={`/admin/movie/${movie.id}/edit`} className="text-indigo-600 hover:text-indigo-900 mr-2">
                                                        Edit
                                                    </Link>
                                                    {/* delete here */}
                                                    <button 
                                                        className="text-red-600 hover:text-red-900"
                                                        onClick={() => deleteMovie(movie.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
        </Authenticated>
    )
}