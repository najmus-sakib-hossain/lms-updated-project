import AdminPage from '@/layouts/admin-page-layout';

export default function MonthlyHomeworkReport() {
    return (
        <AdminPage 
            title="Monthly Homework Report" 
            description="View monthly homework reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Reports', href: '/admin/reports/payment' },
                { title: 'Monthly Homework', href: '/admin/reports/monthly-homework' }
            ]}
        >
            <p className="text-muted-foreground">Monthly homework reports will be displayed here</p>
        </AdminPage>
    );
}
