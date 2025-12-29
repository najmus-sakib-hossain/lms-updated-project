import AdminPage from '@/layouts/admin-page-layout';

export default function AttendanceReports() {
    return (
        <AdminPage 
            title="Attendance Reports" 
            description="View student attendance reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Reports', href: '/admin/reports/attendance' },
                { title: 'Attendance', href: '/admin/reports/attendance' }
            ]}
        >
            <p className="text-muted-foreground">Attendance reports will be displayed here</p>
        </AdminPage>
    );
}
