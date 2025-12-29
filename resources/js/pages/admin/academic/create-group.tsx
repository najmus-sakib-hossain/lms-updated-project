import AdminPage from '@/layouts/admin-page-layout';

export default function CreateGroup() {
    return (
        <AdminPage 
            title="Create Group" 
            description="Add a new group"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Academic', href: '/admin/academic/overview' },
                { title: 'Create Group', href: '/admin/academic/groups/create' }
            ]}
        >
            <p className="text-muted-foreground">Group creation form will be displayed here</p>
        </AdminPage>
    );
}
