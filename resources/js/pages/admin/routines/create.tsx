import AdminPage from '@/layouts/admin-page-layout';

export default function CreateRoutine() {
    return (
        <AdminPage 
            title="Add New Routine" 
            description="Create class routine"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Routines', href: '/admin/routines' },
                { title: 'Create', href: '/admin/routines/create' }
            ]}
        >
            <p className="text-muted-foreground">Routine creation form will be displayed here</p>
        </AdminPage>
    );
}
