import AdminPage from '@/layouts/admin-page-layout';

export default function FeeHistory() {
    return (
        <AdminPage 
            title="Student Fee History" 
            description="View fee payment history"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'History', href: '/admin/fees/history' }
            ]}
        >
            <p className="text-muted-foreground">Fee payment history will be displayed here</p>
        </AdminPage>
    );
}
