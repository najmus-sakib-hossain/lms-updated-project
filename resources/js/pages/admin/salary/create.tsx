import AdminPage from '@/layouts/admin-page-layout';

export default function CreateSalary() {
    return (
        <AdminPage 
            title="Create Salary" 
            description="Process salary payments"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Salary', href: '/admin/salary/create' },
                { title: 'Create', href: '/admin/salary/create' }
            ]}
        >
            <p className="text-muted-foreground">Salary creation form will be displayed here</p>
        </AdminPage>
    );
}
