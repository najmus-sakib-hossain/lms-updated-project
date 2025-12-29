import AdminPage from '@/layouts/admin-page-layout';

export default function UpdateProfile() {
    return (
        <AdminPage 
            title="Update Institute Profile" 
            description="Update institute information"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Subscription', href: '/admin/subscription/profile' },
                { title: 'Profile', href: '/admin/subscription/profile' }
            ]}
        >
            <p className="text-muted-foreground">Institute profile form will be displayed here</p>
        </AdminPage>
    );
}
