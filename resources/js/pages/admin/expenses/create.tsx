import AdminPage from '@/layouts/admin-page-layout';

export default function CreateExpense() {
    return (
        <AdminPage 
            title="Create Expense" 
            description="Record new expense"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Expenses', href: '/admin/expenses/report' },
                { title: 'Create', href: '/admin/expenses/create' }
            ]}
        >
            <p className="text-muted-foreground">Expense entry form will be displayed here</p>
        </AdminPage>
    );
}
