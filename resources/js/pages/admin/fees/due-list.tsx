import AdminPage from '@/layouts/admin-page-layout';

export default function FeeDueList() {
    return (
        <AdminPage 
            title="Due List" 
            description="View students with pending fees"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Due List', href: '/admin/fees/due-list' }
            ]}
        >
            <p className="text-muted-foreground">Due list will be displayed here</p>
        </AdminPage>
    );
}
