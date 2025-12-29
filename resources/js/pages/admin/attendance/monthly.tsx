import AdminPage from '@/layouts/admin-page-layout';

export default function MonthlyAttendance() {
    return (
        <AdminPage 
            title="Monthly Attendance List" 
            description="View monthly attendance records"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Attendance', href: '/admin/attendance' },
                { title: 'Monthly', href: '/admin/attendance/monthly' }
            ]}
        >
            <p className="text-muted-foreground">Monthly attendance will be displayed here</p>
        </AdminPage>
    );
}
