import AdminPage from '@/layouts/admin-page-layout';

export default function CancelPayment() {
    return (
        <AdminPage 
            title="Cancel Payment" 
            description="Cancel fee payments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Cancel', href: '/admin/fees/cancel-payment' }
            ]}
        >
            <p className="text-muted-foreground">Payment cancellation interface will be displayed here</p>
        </AdminPage>
    );
}
