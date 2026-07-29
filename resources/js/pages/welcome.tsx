import { Head } from '@inertiajs/react';
import { Navigation } from '@/components/navigation';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Navigation />
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 px-4">
                <div className="text-center">
                    <h1 className="text-5xl font-bold text-slate-900">Welcome to Alumni</h1>
                    <p className="mt-4 text-xl text-slate-600">Connect with your school community</p>
                    
                    <div className="mt-8 flex gap-4 justify-center">
                        <a href="#" className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700 transition">
                            Get Started
                        </a>
                        <a href="#" className="rounded-lg border-2 border-slate-300 px-8 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition">
                            Learn More
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
