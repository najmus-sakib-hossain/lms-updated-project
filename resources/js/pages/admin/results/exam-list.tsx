import AdminPage from '@/layouts/admin-page-layout';

export default function ExamList() {
    return (
        <AdminPage 
            title="Exam List" 
            description="View all exams"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Results', href: '/admin/results/exams' },
                { title: 'Exam List', href: '/admin/results/exams' }
            ]}
        >
            <p className="text-muted-foreground">Exam list will be displayed here</p>
        </AdminPage>
    );
}
