import SubscriptionCard from '@/Components/Moonton/SubscriptionCard'
import Authenticated from '@/Layouts/Authenticated/Index'
import React from 'react'

export default function SubscriptionPlan() {
    return (
        <Authenticated>
            <div className="flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <SubscriptionCard 
                        isPremium={false}
                        id={1}
                        name={"Basic"}
                        price={"299.000"}
                        durationInMonth={3}
                        features={[
                            "Unlock 10 basic movies",
                            "Up to 3 users",
                            "Support 24/7 ready"
                        ]}
                        onSelectSubscription={(id) => {
                            console.log(id)
                        }}
                    />

                    {/* For Greatest */}
                    <SubscriptionCard
                        isPremium={true}
                        id={2}
                        name={"For Greatest"}
                        price={"800.000"}
                        durationInMonth={5}
                        features={[
                            "Unlock 200 awards movies",
                            "180 subtitles available",
                            "iOS, Android, TV",
                            "Offline mode",
                            "Up to 20 users",
                            "Support 24/7 ready"
                        ]}
                    />
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    )
}