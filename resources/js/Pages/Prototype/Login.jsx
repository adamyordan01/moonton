import { Head, Link } from "@inertiajs/react"
import GuestLayout from "@/Layouts/GuestLayout"
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Moonton/Input";
import Label from "@/Components/Moonton/Label";
import Button from "@/Components/Moonton/Button";

export default function Login() {
    return (
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                {/* <label className="text-base block mb-2">Email Address</label> */}
                                
                                {/* <input type="email" name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Email Address" /> */}

                                <Label
                                    forInput={"email"}
                                    value={"Email Address"}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder={"Email Address"}
                                />
                            </div>
                            <div>
                                {/* <label htmlFor="password" className="text-base block mb-2">Password</label> */}
                                <Label
                                    forInput={"password"}
                                    value={"Password"}
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder={"Password"}
                                />
                                
                                {/* <input type="password" name="password" id="password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Password" /> */}
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </a> */}
                            <Button type="button" variant="primary">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </Button>
                            {/* <a href="sign_up.html" className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </a> */}
                            <Link href={route('prototype.register')} className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}