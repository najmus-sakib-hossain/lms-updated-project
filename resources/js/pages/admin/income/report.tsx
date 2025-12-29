import AdminPage from '@/layouts/admin-page-layout';

export default function IncomeReport() {
    return (
        <AdminPage 
            title="Income Report" 
            description="View income reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Income', href: '/admin/income/report' }
            ]}
        >
            <p className="text-muted-foreground">Income report will be displayed here</p>
        </AdminPage>
    );
}
