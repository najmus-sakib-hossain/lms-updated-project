import AdminPage from '@/layouts/admin-page-layout';

export default function ViewRoutines() {
    return (
        <AdminPage 
            title="View Class Routine" 
            description="View class routines"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Routines', href: '/admin/routines' }
            ]}
        >
            <p className="text-muted-foreground">Class routines will be displayed here</p>
        </AdminPage>
    );
}
