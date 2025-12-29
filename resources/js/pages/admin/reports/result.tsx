import AdminPage from '@/layouts/admin-page-layout';

export default function ResultReports() {
    return (
        <AdminPage 
            title="Result Reports" 
            description="View student result reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Reports', href: '/admin/reports/result' },
                { title: 'Result', href: '/admin/reports/result' }
            ]}
        >
            <p className="text-muted-foreground">Result reports will be displayed here</p>
        </AdminPage>
    );
}
