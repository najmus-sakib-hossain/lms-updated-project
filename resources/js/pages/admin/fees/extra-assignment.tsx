import AdminPage from '@/layouts/admin-page-layout';

export default function ExtraFeeAssignment() {
    return (
        <AdminPage 
            title="Extra Fee Assignment" 
            description="Assign extra fees to students"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Extra Assignment', href: '/admin/fees/extra-assignment' }
            ]}
        >
            <p className="text-muted-foreground">Extra fee assignment interface will be displayed here</p>
        </AdminPage>
    );
}
