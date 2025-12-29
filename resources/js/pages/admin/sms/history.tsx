import AdminPage from '@/layouts/admin-page-layout';

export default function SMSHistory() {
    return (
        <AdminPage 
            title="SMS History" 
            description="View SMS history"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'SMS', href: '/admin/sms/bulk' },
                { title: 'History', href: '/admin/sms/history' }
            ]}
        >
            <p className="text-muted-foreground">SMS history will be displayed here</p>
        </AdminPage>
    );
}
