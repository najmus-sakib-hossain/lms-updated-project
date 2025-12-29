import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AdminPageProps {
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    children: ReactNode;
}

export default function AdminPage({ title, description, breadcrumbs, children }: AdminPageProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={title} />
            <div className="container mx-auto py-6 space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        {description && <CardDescription>{description}</CardDescription>}
                    </CardHeader>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
