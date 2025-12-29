import AdminPage from '@/layouts/admin-page-layout';

export default function AdvanceSalary() {
    return (
        <AdminPage 
            title="Advance Salary" 
            description="Manage advance salary payments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Salary', href: '/admin/salary/create' },
                { title: 'Advance', href: '/admin/salary/advance' }
            ]}
        >
            <p className="text-muted-foreground">Advance salary management will be displayed here</p>
        </AdminPage>
    );
}
