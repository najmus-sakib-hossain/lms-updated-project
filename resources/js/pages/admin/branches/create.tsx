import AdminPage from '@/layouts/admin-page-layout';

export default function CreateBranch() {
    return (
        <AdminPage 
            title="Add New Branch" 
            description="Create a new branch"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Branches', href: '/admin/branches' },
                { title: 'Create', href: '/admin/branches/create' }
            ]}
        >
            <p className="text-muted-foreground">Branch creation form will be displayed here</p>
        </AdminPage>
    );
}
