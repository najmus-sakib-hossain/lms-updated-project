import AdminPage from '@/layouts/admin-page-layout';

export default function PaymentReports() {
    return (
        <AdminPage 
            title="Payment Reports" 
            description="View student payment reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Reports', href: '/admin/reports/payment' },
                { title: 'Payment', href: '/admin/reports/payment' }
            ]}
        >
            <p className="text-muted-foreground">Payment reports will be displayed here</p>
        </AdminPage>
    );
}
