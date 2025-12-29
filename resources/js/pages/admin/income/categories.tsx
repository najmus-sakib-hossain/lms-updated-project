import AdminPage from '@/layouts/admin-page-layout';

export default function IncomeCategories() {
    return (
        <AdminPage 
            title="Manage Category" 
            description="Manage income categories"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Income', href: '/admin/income/report' },
                { title: 'Categories', href: '/admin/income/categories' }
            ]}
        >
            <p className="text-muted-foreground">Income categories management will be displayed here</p>
        </AdminPage>
    );
}
