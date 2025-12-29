import AdminPage from '@/layouts/admin-page-layout';

export default function ReceiveFee() {
    return (
        <AdminPage 
            title="Receive Student Fee" 
            description="Collect fee payments from students"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Receive', href: '/admin/fees/receive' }
            ]}
        >
            <p className="text-muted-foreground">Fee collection form will be displayed here</p>
        </AdminPage>
    );
}
