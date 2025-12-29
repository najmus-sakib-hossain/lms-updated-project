import AdminPage from '@/layouts/admin-page-layout';

export default function TeacherAttendanceList() {
    return (
        <AdminPage 
            title="Attendance List" 
            description="View teacher attendance records"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Teachers', href: '/admin/teachers' },
                { title: 'Attendance', href: '/admin/teachers/attendance' }
            ]}
        >
            <p className="text-muted-foreground">Teacher attendance list will be displayed here</p>
        </AdminPage>
    );
}
