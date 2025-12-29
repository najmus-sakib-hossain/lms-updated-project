import AdminPage from '@/layouts/admin-page-layout';

export default function SubscriptionStatus() {
    return (
        <AdminPage 
            title="Subscription Status" 
            description="View subscription details"
            breadcrumbs={[
                { title: 'Dashboard', href: '/admin/dashboard' },
                { title: 'Subscription', href: '/admin/subscription/profile' },
                { title: 'Status', href: '/admin/subscription/status' }
            ]}
        >
            <p className="text-muted-foreground">Subscription status will be displayed here</p>
        </AdminPage>
    );
}
