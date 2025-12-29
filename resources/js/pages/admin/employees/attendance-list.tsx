import AdminPage from '@/layouts/admin-page-layout';

export default function EmployeeAttendanceList() {
    return (
        <AdminPage 
            title="Attendance List" 
            description="View employee attendance records"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Attendance', href: '/admin/employees/attendance' }
            ]}
        >
            <p className="text-muted-foreground">Employee attendance list will be displayed here</p>
        </AdminPage>
    );
}
