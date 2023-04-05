<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */

    private function activePlan() {
        $activePlan = auth()->user() ? auth()->user()->lastActiveUserSubscription : null;

        if (! $activePlan) {
            return null;
        }

        $lastDay = Carbon::parse($activePlan->updated_at)->addMonth($activePlan->subscriptionPlan->duration);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expires_at)->diffInDays(Carbon::now());

        return [
            'name' => $activePlan->subscriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays' => $activeDays,
        ];
    }

    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'activePlan' => $this->activePlan(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
