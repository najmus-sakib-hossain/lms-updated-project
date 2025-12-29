import AdminPage from '@/layouts/admin-page-layout';

export default function CreateClass() {
    return (
        <AdminPage 
            title="Create Class" 
            description="Add a new class"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Academic', href: '/admin/academic/overview' },
                { title: 'Create Class', href: '/admin/academic/classes/create' }
            ]}
        >
            <p className="text-muted-foreground">Class creation form will be displayed here</p>
        </AdminPage>
    );
}
