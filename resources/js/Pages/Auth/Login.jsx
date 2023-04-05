import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';
import Label from '@/Components/Moonton/Label';
import Input from '@/Components/Moonton/Input';
import Button from '@/Components/Moonton/Button';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            post(route('login'));
        }, 300);
    };

    return (        
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
            <Head title="Log in" />
            
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

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
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            <Label
                                forInput={"email"}
                                value={"Email Address"}
                            />
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                placeholder={"Email Address"}
                                onChange={(e) => setData('email', e.target.value)}
                                required={true}
                            />
                            <InputError message={errors.email} className='mt-2' />
                        </div>
                        <div>
                            <Label
                                forInput={"password"}
                                value={"Password"}
                            />
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder={"Password"}
                                required={true}
                            />
                            <InputError message={errors.password} className='mt-2' />
                        </div>
                        <div className="flex items-center justify-between">
                            <Checkbox
                                id="remember"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                                <span className="text-base">Remember me</span>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-base text-white hover:text-gray-300"
                                >
                                    Forgot your password?
                                </Link>
                            )}
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <Button variant="primary" processing={processing}>
                            <span className="text-base font-semibold">
                                Start Watching
                            </span>
                        </Button>
                        <Link href={route('register')} className="rounded-2xl border border-white py-[13px] text-center">
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
