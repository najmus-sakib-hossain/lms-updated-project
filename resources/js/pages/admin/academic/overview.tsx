import AdminPage from '@/layouts/admin-page-layout';

export default function AcademicOverview() {
    return (
        <AdminPage 
            title="Academic Overview" 
            description="View all classes, subjects, groups, and batches"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Academic Overview', href: '/admin/academic/overview' }
            ]}
        >
            <p className="text-muted-foreground">Academic overview will be displayed here</p>
        </AdminPage>
    );
}
