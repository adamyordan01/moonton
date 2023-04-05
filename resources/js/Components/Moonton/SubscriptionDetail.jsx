

export default function (
    {
        isPremium,
        name,
        remainingActiveDays,
        activeDays,
    }
) {
    // make progress bar value on percentage but not decimal
    const progress = Math.round((remainingActiveDays / activeDays) * 100) + `%`;

    console.log(progress);

    return (
        <>
            {isPremium == false ?
                (
                    <div className="mt-auto pr-[30px] pb-10">
                        <div className="p-5 bg-white rounded-[25px] outline outline-1 outline-[#f1f1f1]">
                            <div className="text-black text-lg font-semibold mb-8">
                                {name}
                            </div>
                            <div className="text-black text-sm mb-2">
                                {remainingActiveDays} of {activeDays} hari
                            </div>
                            {/* make progress bar */}
                            <div className="rounded-full w-full h-[6px] bg-[#f1f1f1]">
                                <div className="rounded-full h-full w-9/12 bg-alerange" style={{ width: `${progress}` }}></div>
                            </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="mt-auto pr-[30px] pb-10">
                        <div className="p-5 bg-black rounded-[25px]">
                            <img src="/icons/ic_star-rounded.svg" alt="" />
                            <div className="text-white text-lg font-semibold mt-4 mb-8">
                                {name}
                            </div>
                            <div className="text-white text-sm mb-2">
                                {remainingActiveDays} of {activeDays} hari
                            </div>
                            <div className="rounded-full w-full h-[6px] bg-[#333333]">
                                <div className="rounded-full h-full w-9/12 bg-alerange" style={{ width: `${progress}` }}></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
                    
    )
}