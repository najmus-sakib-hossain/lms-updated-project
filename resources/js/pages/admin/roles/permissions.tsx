import AdminPage from '@/layouts/admin-page-layout';

export default function PermissionsList() {
    return (
        <AdminPage 
            title="Permission Assigned List" 
            description="View and manage role permissions"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Roles & Permissions', href: '/admin/roles/permissions' }
            ]}
        >
            <p className="text-muted-foreground">Permissions list will be displayed here</p>
        </AdminPage>
    );
}
