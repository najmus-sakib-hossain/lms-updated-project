import AdminPage from '@/layouts/admin-page-layout';

export default function ManualAttendance() {
    return (
        <AdminPage 
            title="Manual Attendance" 
            description="Manually record employee attendance"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Manual Attendance', href: '/admin/employees/attendance/manual' }
            ]}
        >
            <p className="text-muted-foreground">Manual attendance form will be displayed here</p>
        </AdminPage>
    );
}
