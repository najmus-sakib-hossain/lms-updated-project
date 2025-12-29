import AdminPage from '@/layouts/admin-page-layout';

export default function CreateAttendance() {
    return (
        <AdminPage 
            title="Create Attendance" 
            description="Take student attendance"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Attendance', href: '/admin/attendance' },
                { title: 'Create', href: '/admin/attendance/create' }
            ]}
        >
            <p className="text-muted-foreground">Attendance creation form will be displayed here</p>
        </AdminPage>
    );
}
