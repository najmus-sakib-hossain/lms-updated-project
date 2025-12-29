import AdminPage from '@/layouts/admin-page-layout';

export default function EmployeeList() {
    return (
        <AdminPage 
            title="Staff List" 
            description="View all staff members"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' }
            ]}
        >
            <p className="text-muted-foreground">Staff list will be displayed here</p>
        </AdminPage>
    );
}
