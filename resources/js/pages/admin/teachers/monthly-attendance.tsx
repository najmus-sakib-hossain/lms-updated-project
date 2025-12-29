import AdminPage from '@/layouts/admin-page-layout';

export default function TeacherMonthlyAttendance() {
    return (
        <AdminPage 
            title="Monthly Attendance Report" 
            description="View monthly teacher attendance"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' },
                { title: 'Monthly Attendance', href: '/admin/teachers/attendance/monthly' }
            ]}
        >
            <p className="text-muted-foreground">Monthly teacher attendance will be displayed here</p>
        </AdminPage>
    );
}
