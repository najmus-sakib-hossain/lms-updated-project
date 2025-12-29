import AdminPage from '@/layouts/admin-page-layout';

export default function DueListSMS() {
    return (
        <AdminPage 
            title="Due List SMS" 
            description="Send SMS to students with due fees"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'SMS', href: '/admin/sms/bulk' },
                { title: 'Due List', href: '/admin/sms/due-list' }
            ]}
        >
            <p className="text-muted-foreground">Due list SMS interface will be displayed here</p>
        </AdminPage>
    );
}
