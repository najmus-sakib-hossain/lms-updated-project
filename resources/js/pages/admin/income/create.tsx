import AdminPage from '@/layouts/admin-page-layout';

export default function CreateIncome() {
    return (
        <AdminPage 
            title="New income" 
            description="Record new income"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Income', href: '/admin/income/report' },
                { title: 'Create', href: '/admin/income/create' }
            ]}
        >
            <p className="text-muted-foreground">Income entry form will be displayed here</p>
        </AdminPage>
    );
}
