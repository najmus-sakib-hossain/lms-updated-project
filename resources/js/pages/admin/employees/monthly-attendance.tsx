import AdminPage from '@/layouts/admin-page-layout';

export default function EmployeeMonthlyAttendance() {
    return (
        <AdminPage 
            title="Attendance Monthly Report" 
            description="View monthly employee attendance"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Monthly Attendance', href: '/admin/employees/attendance/monthly' }
            ]}
        >
            <p className="text-muted-foreground">Monthly employee attendance will be displayed here</p>
        </AdminPage>
    );
}
