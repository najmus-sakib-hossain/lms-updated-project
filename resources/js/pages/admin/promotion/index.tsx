import AdminPage from '@/layouts/admin-page-layout';

export default function ClassPromotion() {
    return (
        <AdminPage 
            title="Class Promotion" 
            description="Promote students to next class"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Class Promotion', href: '/admin/promotion' }
            ]}
        >
            <p className="text-muted-foreground">Class promotion interface will be displayed here</p>
        </AdminPage>
    );
}
