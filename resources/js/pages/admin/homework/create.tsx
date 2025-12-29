import AdminPage from '@/layouts/admin-page-layout';

export default function CreateHomework() {
    return (
        <AdminPage 
            title="Add New Homework" 
            description="Create homework assignment"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Homework', href: '/admin/homework' },
                { title: 'Create', href: '/admin/homework/create' }
            ]}
        >
            <p className="text-muted-foreground">Homework creation form will be displayed here</p>
        </AdminPage>
    );
}
