// import router as Inertia
import { router as Inertia } from '@inertiajs/react'
import SubscriptionCard from '@/Components/Moonton/SubscriptionCard'
import Authenticated from '@/Layouts/Authenticated/Index'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const handleSelectSubscription = (id) => {
        Inertia.post(route('user.subscription-plan.user-subscribe', id))
    }
    return (
        <Authenticated
            auth={auth}
        >
            <Head title='Subscription Plans' />
            <div className="flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {
                        subscriptionPlans.map((plan, i) => {
                            return (
                                <SubscriptionCard
                                    key={i}
                                    {...plan}
                                    isPremium={plan.name === "Premium" ? true : false}
                                    features={JSON.parse(plan.features)}
                                    onSelectSubscription={() => handleSelectSubscription(plan.id)}
                                    // features={JSON.parse(plan.features).map((feature, i) => {
                                    //     return feature
                                    // })}
                                />
                            )
                        })
                    }
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    )
}