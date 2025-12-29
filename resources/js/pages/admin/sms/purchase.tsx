import AdminPage from '@/layouts/admin-page-layout';

export default function PurchaseSMS() {
    return (
        <AdminPage 
            title="Purchase SMS" 
            description="Purchase SMS credits"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'SMS', href: '/admin/sms/bulk' },
                { title: 'Purchase', href: '/admin/sms/purchase' }
            ]}
        >
            <p className="text-muted-foreground">SMS purchase interface will be displayed here</p>
        </AdminPage>
    );
}
