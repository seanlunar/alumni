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
                </div>
            </main>
        </>
    );
}
