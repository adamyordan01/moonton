<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'title' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama, Crime, Thriller',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 9.3,
            ],
            [
                'title' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama, Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating' => 9.2,
            ],
            [
                'title' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action, Crime, Drama, Thriller',
                'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
                'thumbnail' => 'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'rating' => 9.0,
            ],
            [
                'title' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Drama, Crime',
                'video_url' => 'https://www.youtube.com/watch?v=qJr_1IuJ9DQ',
                'thumbnail' => 'https://i.ytimg.com/vi/qJr_1IuJ9DQ/maxresdefault.jpg',
                'rating' => 9.0,
            ],
            [
                'title' => 'The Lord of the Rings: The Return of the King',
                'slug' => 'the-lord-of-the-rings-the-return-of-the-king',
                'category' => 'Adventure, Drama, Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=r5X-hFf6Bwo',
                'thumbnail' => 'https://i.ytimg.com/vi/r5X-hFf6Bwo/maxresdefault.jpg',
                'rating' => 8.9,
            ],
            [
                'title' => 'Pulp Fiction',
                'slug' => 'pulp-fiction',
                'category' => 'Crime, Drama',
                'video_url' => 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
                'thumbnail' => 'https://i.ytimg.com/vi/s7EdQ4FqbhY/maxresdefault.jpg',
                'rating' => 8.9,
            ],
            [
                'title' => 'Schindler\'s List',
                'slug' => 'schindlers-list',
                'category' => 'Biography, Drama, History',
                'video_url' => 'https://www.youtube.com/watch?v=gG22XNhtnoY',
                'thumbnail' => 'https://i.ytimg.com/vi/gG22XNhtnoY/maxresdefault.jpg',
                'rating' => 8.9,
            ],
            [
                'title' => 'Avengers: Endgame',
                'slug' => 'avengers-endgame',
                'category' => 'Action, Adventure, Drama, Sci-Fi',
                'video_url' => 'https://www.youtube.com/watch?v=TcMBFSGVi1c',
                'thumbnail' => 'https://i.ytimg.com/vi/TcMBFSGVi1c/maxresdefault.jpg',
                'rating' => 8.4,
            ],
            [
                'title' => 'The Good, the Bad and the Ugly',
                'slug' => 'the-good-the-bad-and-the-ugly',
                'category' => 'Western',
                'video_url' => 'https://www.youtube.com/watch?v=WCN5JJY_wiA',
                'thumbnail' => 'https://i.ytimg.com/vi/WCN5JJY_wiA/maxresdefault.jpg',
                'rating' => 8.9,
            ],
            [
                'title' => 'Fight Club',
                'slug' => 'fight-club',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=SUXWAEX2jlg',
                'thumbnail' => 'https://i.ytimg.com/vi/SUXWAEX2jlg/maxresdefault.jpg',
                'rating' => 8.8,
            ],
            [
                'title' => 'The Lord of the Rings: The Fellowship of the Ring',
                'slug' => 'the-lord-of-the-rings-the-fellowship-of-the-ring',
                'category' => 'Adventure, Drama, Fantasy',
                'video_url' => 'https://www.youtube.com/watch?v=V75dMMIW2B4',
                'thumbnail' => 'https://i.ytimg.com/vi/V75dMMIW2B4/maxresdefault.jpg',
                'rating' => 8.8,
            ],
            [
                'title' => 'Forrest Gump',
                'slug' => 'forrest-gump',
                'category' => 'Drama, Romance',
                'video_url' => 'https://www.youtube.com/watch?v=bLvqoHBptjg',
                'thumbnail' => 'https://i.ytimg.com/vi/bLvqoHBptjg/maxresdefault.jpg',
                'rating' => 8.8,
            ],
            [
                'title' => 'Inception',
                'slug' => 'inception',
                'category' => 'Action, Adventure, Sci-Fi, Thriller',
                'video_url' => 'https://www.youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://i.ytimg.com/vi/YoHD9XEInc0/maxresdefault.jpg',
                'rating' => 8.8,
            ]
        ];

        foreach ($movies as $movie) {
            Movie::create($movie);
        }
    }
}
