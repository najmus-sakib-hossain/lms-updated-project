import AdminPage from '@/layouts/admin-page-layout';

export default function SMSSettings() {
    return (
        <AdminPage 
            title="SMS Settings" 
            description="Configure SMS settings"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'SMS', href: '/admin/sms/bulk' },
                { title: 'Settings', href: '/admin/sms/settings' }
            ]}
        >
            <p className="text-muted-foreground">SMS settings will be displayed here</p>
        </AdminPage>
    );
}
