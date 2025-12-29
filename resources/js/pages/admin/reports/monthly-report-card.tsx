import AdminPage from '@/layouts/admin-page-layout';

export default function MonthlyReportCard() {
    return (
        <AdminPage 
            title="Monthly Report Card" 
            description="View monthly report cards"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Reports', href: '/admin/reports/payment' },
                { title: 'Monthly Report Card', href: '/admin/reports/monthly-report-card' }
            ]}
        >
            <p className="text-muted-foreground">Monthly report cards will be displayed here</p>
        </AdminPage>
    );
}
