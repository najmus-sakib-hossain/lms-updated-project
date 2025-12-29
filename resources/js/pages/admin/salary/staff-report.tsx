import AdminPage from '@/layouts/admin-page-layout';

export default function StaffSalaryReport() {
    return (
        <AdminPage 
            title="Staff Salary Report" 
            description="View staff salary reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Salary', href: '/admin/salary/create' },
                { title: 'Staff Report', href: '/admin/salary/staff-report' }
            ]}
        >
            <p className="text-muted-foreground">Staff salary report will be displayed here</p>
        </AdminPage>
    );
}
