import AdminPage from '@/layouts/admin-page-layout';

export default function ExamCategories() {
    return (
        <AdminPage 
            title="Exam Category" 
            description="Manage exam categories"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Results', href: '/admin/results/exams' },
                { title: 'Categories', href: '/admin/results/categories' }
            ]}
        >
            <p className="text-muted-foreground">Exam categories management will be displayed here</p>
        </AdminPage>
    );
}
