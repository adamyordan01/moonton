<?php

namespace App\Http\Controllers\Admin;

use App\Models\Movie;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class MovieController extends Controller
{
    protected function flash(string $message, string $type = 'success')
    {
        session()->flash('flash', [
            'message' => $message,
            'type' => $type,
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Admin/Movie/Index', [
            'movies' => Movie::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Movie/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // make sure the request is valid
        $request->validate([
            'title' => ['required', 'string', 'max:255', 'unique:movies'],
            'category' => ['required', 'string', 'max:255'],
            'video_url' => ['required', 'url'],
            'thumbnail' => ['required', 'image', 'max:2048', 'mimes:jpeg,png,jpg'],
            'rating' => ['required', 'numeric', 'min:1', 'max:10'],
            'is_featured' => ['required', 'boolean'],
        ]);

        // store the thumbnail
        $thumbnail = $request->file('thumbnail');
        // change the name of the thumbnail into a unique name
        $filename = uniqid() . '.' . $thumbnail->getClientOriginalExtension();
        

        // use the storage
        Storage::disk('public')->putFileAs('movie-thumbnails', $thumbnail, $filename);

        // store the movie
        Movie::create([
            'title' => $request->title,
            'slug' => Str::slug($request->title), // 'hello world' => 'hello-world
            'category' => $request->category,
            'video_url' => $request->video_url,
            'thumbnail' => $filename,
            'rating' => $request->rating,
            'is_featured' => $request->is_featured,
        ]);


        // $this->flash('Movie created successfully', 'success');

        return redirect()->route('admin.movie.index')
            ->with('flash', [
                'message' => 'Movie created successfully',
                'type' => 'success',
            ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return inertia('Admin/Movie/Edit', [
            'movie' => $movie,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Movie $movie)
    {
        // make sure the request is valid
        $request->validate([
            'title' => ['required', 'string', 'max:255', 'unique:movies,title,' . $movie->id],
            'category' => ['required', 'string', 'max:255'],
            'video_url' => ['required', 'url'],
            'thumbnail' => ['nullable', 'image', 'max:2048', 'mimes:jpeg,png,jpg'],
            'rating' => ['required', 'numeric', 'min:1', 'max:10'],
            'is_featured' => ['required', 'boolean'],
        ]);

        // store the thumbnail
        $thumbnail = $request->file('thumbnail');
        // change the name of the thumbnail into a unique name
        $filename = uniqid() . '.' . $thumbnail->getClientOriginalExtension();

        // check if the thumbnail is not null insert new thumbnail and delete the old one
        if ($thumbnail) {
            // use the storage
            Storage::disk('public')->putFileAs('movie-thumbnails', $thumbnail, $filename);
            // delete the old thumbnail
            Storage::disk('public')->delete('movie-thumbnails/' . $movie->thumbnail);
        }

        // store the movie
        $movie->update([
            'title' => $request->title,
            'slug' => Str::slug($request->title), // 'hello world' => 'hello-world
            'category' => $request->category,
            'video_url' => $request->video_url,
            'thumbnail' => $thumbnail ? $filename : $movie->thumbnail,
            'rating' => $request->rating,
            'is_featured' => $request->is_featured,
        ]);

        return redirect()->route('admin.movie.index')
            ->with('flash', [
                'message' => 'Movie updated successfully',
                'type' => 'success',
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        
    }
}
