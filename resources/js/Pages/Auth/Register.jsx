import InputError from "@/Components/InputError";
import Button from "@/Components/Moonton/Button";
import Input from "@/Components/Moonton/Input";
import Label from "@/Components/Moonton/Label";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            post(route('register'));
        }, 2000);
    };

    return (
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <Head title="Register" />

            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Sign Up
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]" onSubmit={submit}>
                        <div className="flex flex-col gap-6">
                            <div>
                                <Label
                                    forInput="name"
                                    value="Full Name"
                                />
                                <Input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your fullname..."
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    // required={true}
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                                <Label
                                    forInput="email"
                                    value="Email Address"
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email Address"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    // required={true}
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>
                            <div>
                                <Label
                                    forInput="password"
                                    value="Password"
                                />
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    // required={true}
                                />
                                <InputError message={errors.password} className="mt-2" />
                            </div>
                            <div>
                                <Label
                                    forInput="password_confirmation"
                                    value="Confirm Password"
                                />
                                <Input
                                    type="password"
                                    name="password_confirmation"
                                    id="password_confirmation"
                                    placeholder="Confirm Your Password"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    // required={true}
                                />
                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <Button processing={processing}>
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </Button>
                            {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </a> */}
                            <Link href={route('login')}
                                className="rounded-2xl border border-white py-[13px] text-center"
                            >
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </Link>
                            {/* <a href="sign_in.html" className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </a> */}
                            {/* <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </button> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}