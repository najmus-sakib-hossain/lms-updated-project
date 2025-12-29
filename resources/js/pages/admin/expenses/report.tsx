import AdminPage from '@/layouts/admin-page-layout';

export default function ExpenseReport() {
    return (
        <AdminPage 
            title="Expense Report" 
            description="View expense reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Expenses', href: '/admin/expenses/report' }
            ]}
        >
            <p className="text-muted-foreground">Expense report will be displayed here</p>
        </AdminPage>
    );
}
