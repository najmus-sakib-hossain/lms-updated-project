import AdminPage from '@/layouts/admin-page-layout';

export default function SelfAttendance() {
    return (
        <AdminPage 
            title="Self Attendance" 
            description="Employee self-attendance marking"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Self Attendance', href: '/admin/employees/attendance/self' }
            ]}
        >
            <p className="text-muted-foreground">Self attendance form will be displayed here</p>
        </AdminPage>
    );
}
