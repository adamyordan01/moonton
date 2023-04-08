import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import Authenticated from "@/Layouts/Authenticated/Index"
import { Head, Link, useForm } from "@inertiajs/react"
import { Inertia } from '@inertiajs/inertia'


export default function Edit({ auth, movie }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        ...movie,
    })

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post(route('admin.movie.update', movie.id), {
            preserveScroll: true,
            _method: 'PUT',
            ...data,
        })
    }

    return (
        <Authenticated auth={auth}>
            <Head title="Update movie" />
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Update movie - { movie.title }</h1>
                    <Link href={route('admin.movie.index')} className="text-blue-500 hover:text-blue-600">
                        Back
                    </Link>
                </div>
                <div className="m-h-screen">
                    <div className="w-full sm:max-w-2xl mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <InputLabel htmlFor="title" value="Title" />
                                <TextInput
                                    id="title"
                                    name="title"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    autoComplete="title"
                                    isFocused={true}
                                    onChange={(e) => setData('title', e.target.value)}
                                    // required
                                />

                                <InputError message={errors.title} className="mt-2" />
                            </div>
                            <div className="mb-5">
                                <InputLabel htmlFor="category" value="Category" />
                                <TextInput
                                    id="category"
                                    name="category"
                                    value={data.category}
                                    className="mt-1 block w-full"
                                    autoComplete="category"
                                    onChange={(e) => setData('category', e.target.value)}
                                    // required
                                />

                                <InputError message={errors.category} className="mt-2" />
                            </div>
                            <div className="mb-5">
                                <InputLabel htmlFor="video_url" value="Video URL" />
                                <TextInput
                                    id="video_url"
                                    name="video_url"
                                    value={data.video_url}
                                    className="mt-1 block w-full"
                                    autoComplete="video_url"
                                    onChange={(e) => setData('video_url', e.target.value)}
                                    // required
                                />

                                <InputError message={errors.video_url} className="mt-2" />
                            </div>

                            <div className="mb-5">
                                <img src={`/storage/movie-thumbnails/${movie.thumbnail}`} alt={movie.thumbnail} className="w-24 rounded-md" />
                            </div>

                            <div className="mb-5">
                                <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                                <label htmlFor="thumbnail" className="sr-only">Choose file</label>
                                <input type="file" name="thumbnail" id="thumbnail" className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:bg-transparent file:border-0  file:bg-gray-200 file:mr-4 file:py-3 file:px-4"
                                    // onChange for file input
                                    onChange={(e) => setData('thumbnail', e.target.files[0])}
                                    // required
                                />

                                {progress && (
                                    <progress value={progress.percentage} max="100">
                                        {progress.percentage}%
                                    </progress>
                                )}
                                {/* {
                                    progress && (
                                        <div className="mt-2">
                                            <div className="bg-gray-200 rounded-full overflow-hidden">
                                                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: progress + '%' }}>
                                                    {progress}%
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } */}

                                <InputError message={errors.thumbnail} className="mt-2" />
                            </div>
                            <div className="mb-5">
                                <InputLabel htmlFor="rating" value="Rating" />
                                <TextInput
                                    id="rating"
                                    name="rating"
                                    value={data.rating}
                                    className="mt-1 block w-full"
                                    autoComplete="rating"
                                    onChange={(e) => setData('rating', e.target.value)}
                                    // required
                                />

                                <InputError message={errors.rating} className="mt-2" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="is_featured" className="block text-sm font-medium text-gray-700">
                                    Is Featured
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="is_featured"
                                        name="is_featured"
                                        type="checkbox"
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        onChange={(e) => setData('is_featured', e.target.checked)}
                                        checked={data.is_featured ?? false}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('admin.movie.index')}
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="ml-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={processing}
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}