import AdminPage from '@/layouts/admin-page-layout';

export default function RegenerateFees() {
    return (
        <AdminPage 
            title="Regenerate Fees" 
            description="Regenerate fee records"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Regenerate', href: '/admin/fees/regenerate' }
            ]}
        >
            <p className="text-muted-foreground">Fee regeneration interface will be displayed here</p>
        </AdminPage>
    );
}
