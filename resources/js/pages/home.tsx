import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home({ canRegister = true }: { canRegister?: boolean }) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Learning Management System">
                <meta name="description" content="Comprehensive Learning Management System for educational institutions" />
            </Head>
            
            <div className="flex min-h-screen flex-col bg-background">
                {/* Header */}
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container flex h-16 items-center justify-between">
                        <div className="flex items-center gap-2">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                className="h-6 w-6"
                            >
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            </svg>
                            <span className="text-xl font-bold">LMS</span>
                        </div>
                        
                        <nav className="flex items-center gap-4">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button>Dashboard</Button>
                                </Link>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <Button variant="ghost">Log in</Button>
                                    </Link>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <Button>Get Started</Button>
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="container flex flex-col items-center justify-center py-20 md:py-32">
                    <div className="mx-auto max-w-4xl text-center space-y-6">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                            Transform Your
                            <span className="block text-primary">Educational Institution</span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                            A comprehensive Learning Management System designed to streamline 
                            student enrollment, attendance tracking, fee management, and academic operations.
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            {auth.user ? (
                                <Link href={dashboard()}>
                                    <Button size="lg" className="w-full sm:w-auto">
                                        Go to Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <Button size="lg" className="w-full sm:w-auto">
                                                Get Started Free
                                            </Button>
                                        </Link>
                                    )}
                                    <Link href={login()}>
                                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                            Sign In
                                        </Button>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="container py-20 bg-muted/50">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Everything You Need to Manage Your Institution
                            </h2>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                                Powerful features designed for schools, colleges, and coaching centers
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                    <CardTitle>Student Management</CardTitle>
                                    <CardDescription>
                                        Complete student information system with enrollment, profiles, and academic records
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                    <CardTitle>Attendance Tracking</CardTitle>
                                    <CardDescription>
                                        Real-time attendance monitoring with automated reports and parent notifications
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <line x1="12" y1="1" x2="12" y2="23" />
                                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                    <CardTitle>Fee Management</CardTitle>
                                    <CardDescription>
                                        Streamlined fee collection, payment tracking, and automated receipt generation
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    </svg>
                                    <CardTitle>Academic Management</CardTitle>
                                    <CardDescription>
                                        Manage classes, subjects, exams, results, and complete academic operations
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                    </svg>
                                    <CardTitle>Teacher Portal</CardTitle>
                                    <CardDescription>
                                        Dedicated portal for teachers to manage classes, assignments, and student evaluations
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-10 w-10 mb-2 text-primary"
                                    >
                                        <line x1="22" y1="12" x2="2" y2="12" />
                                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                                        <line x1="6" y1="16" x2="6.01" y2="16" />
                                        <line x1="10" y1="16" x2="10.01" y2="16" />
                                    </svg>
                                    <CardTitle>Reports & Analytics</CardTitle>
                                    <CardDescription>
                                        Comprehensive reports and insights to make data-driven decisions
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="container py-20">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">10,000+</div>
                                <div className="text-muted-foreground mt-2">Students Managed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">500+</div>
                                <div className="text-muted-foreground mt-2">Institutions Using</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary">99.9%</div>
                                <div className="text-muted-foreground mt-2">Uptime Guaranteed</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-20 bg-primary text-primary-foreground">
                    <div className="mx-auto max-w-4xl text-center space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Ready to Transform Your Institution?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-lg opacity-90">
                            Join hundreds of educational institutions using our platform to streamline their operations
                        </p>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            {canRegister && (
                                <Link href={register()}>
                                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                        Start Free Trial
                                    </Button>
                                </Link>
                            )}
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t py-12">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="2" 
                                        className="h-6 w-6"
                                    >
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                    </svg>
                                    <span className="text-xl font-bold">LMS</span>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Empowering educational institutions with modern management tools
                                </p>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-4">Product</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="#" className="hover:text-foreground">Features</a></li>
                                    <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                                    <li><a href="#" className="hover:text-foreground">Demo</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-4">Company</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="#" className="hover:text-foreground">About</a></li>
                                    <li><a href="#" className="hover:text-foreground">Blog</a></li>
                                    <li><a href="#" className="hover:text-foreground">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-4">Support</h3>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li><a href="#" className="hover:text-foreground">Documentation</a></li>
                                    <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                                    <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                            <p>&copy; {new Date().getFullYear()} Learning Management System. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
