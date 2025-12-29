import AdminPage from '@/layouts/admin-page-layout';

export default function CreateEmployee() {
    return (
        <AdminPage 
            title="Add New Staff" 
            description="Register a new staff member"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Create', href: '/admin/employees/create' }
            ]}
        >
            <p className="text-muted-foreground">Staff registration form will be displayed here</p>
        </AdminPage>
    );
}
