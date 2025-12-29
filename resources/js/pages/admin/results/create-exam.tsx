import AdminPage from '@/layouts/admin-page-layout';

export default function CreateExam() {
    return (
        <AdminPage 
            title="Create Exam" 
            description="Create a new exam"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Results', href: '/admin/results/exams' },
                { title: 'Create Exam', href: '/admin/results/exams/create' }
            ]}
        >
            <p className="text-muted-foreground">Exam creation form will be displayed here</p>
        </AdminPage>
    );
}
