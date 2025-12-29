import AdminPage from '@/layouts/admin-page-layout';

export default function FeeCategories() {
    return (
        <AdminPage 
            title="Fee Category" 
            description="Manage fee categories"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Fees', href: '/admin/fees/receive' },
                { title: 'Categories', href: '/admin/fees/categories' }
            ]}
        >
            <p className="text-muted-foreground">Fee categories management will be displayed here</p>
        </AdminPage>
    );
}
