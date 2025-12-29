import AdminPage from '@/layouts/admin-page-layout';

export default function AttendanceList() {
    return (
        <AdminPage 
            title="Attendance List" 
            description="View student attendance records"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Attendance', href: '/admin/attendance' }
            ]}
        >
            <p className="text-muted-foreground">Attendance list will be displayed here</p>
        </AdminPage>
    );
}
