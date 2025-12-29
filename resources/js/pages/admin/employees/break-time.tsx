import AdminPage from '@/layouts/admin-page-layout';

export default function BreakTime() {
    return (
        <AdminPage 
            title="Break Time In-Out" 
            description="Manage employee break time"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Employees', href: '/admin/employees' },
                { title: 'Break Time', href: '/admin/employees/attendance/break' }
            ]}
        >
            <p className="text-muted-foreground">Break time management will be displayed here</p>
        </AdminPage>
    );
}
