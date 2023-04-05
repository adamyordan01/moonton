<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'duration' => 3,
                'features' => json_encode([
                    'feature 1',
                    'feature 2',
                    'feature 3',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 899000,
                'duration' => 5,
                'features' => json_encode([
                    'feature 1',
                    'feature 2',
                    'feature 3',
                    'feature 4',
                    'feature 5',
                ]),
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);

        // foreach ($subscriptionPlans as $subscriptionPlan) {
        //     \App\Models\SubscriptionPlan::create($subscriptionPlan);
        // }
    }
}
