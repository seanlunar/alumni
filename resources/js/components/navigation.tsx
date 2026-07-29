import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import AppLogo from '@/components/app-logo';
import { home, login, register } from '@/routes';

export function Navigation() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link href={home().url} className="flex items-center">
                    <AppLogo />
                </Link>

                <div className="flex gap-3">
                    <Button variant="ghost" asChild>
                        <Link href={home().url}>Home</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link href={login().url}>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href={register().url}>Register</Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
}
