import AdminPage from '@/layouts/admin-page-layout';

export default function TeacherSalaryReport() {
    return (
        <AdminPage 
            title="Teacher Salary Report" 
            description="View teacher salary reports"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Salary', href: '/admin/salary/create' },
                { title: 'Teacher Report', href: '/admin/salary/teachers-report' }
            ]}
        >
            <p className="text-muted-foreground">Teacher salary report will be displayed here</p>
        </AdminPage>
    );
}
