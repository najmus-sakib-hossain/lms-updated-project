import AdminPage from '@/layouts/admin-page-layout';

export default function ExpenseCategories() {
    return (
        <AdminPage 
            title="Manage Category" 
            description="Manage expense categories"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Expenses', href: '/admin/expenses/report' },
                { title: 'Categories', href: '/admin/expenses/categories' }
            ]}
        >
            <p className="text-muted-foreground">Expense categories management will be displayed here</p>
        </AdminPage>
    );
}
