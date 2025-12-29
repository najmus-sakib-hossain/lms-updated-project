import AdminPage from '@/layouts/admin-page-layout';

export default function BranchList() {
    return (
        <AdminPage 
            title="Branch List" 
            description="View and manage all branches"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Branches', href: '/admin/branches' }
            ]}
        >
            <p className="text-muted-foreground">Branch list will be displayed here</p>
        </AdminPage>
    );
}
