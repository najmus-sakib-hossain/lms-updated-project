import AdminPage from '@/layouts/admin-page-layout';

export default function BulkSMS() {
    return (
        <AdminPage 
            title="Bulk SMS" 
            description="Send bulk SMS messages"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'SMS', href: '/admin/sms/bulk' },
                { title: 'Bulk', href: '/admin/sms/bulk' }
            ]}
        >
            <p className="text-muted-foreground">Bulk SMS interface will be displayed here</p>
        </AdminPage>
    );
}
