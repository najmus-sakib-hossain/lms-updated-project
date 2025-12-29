import AdminPage from '@/layouts/admin-page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Dashboard({ stats }: { stats: any }) {
    return (
        <AdminPage 
            title="Admin Dashboard" 
            description="Welcome to the admin panel"
            breadcrumbs={[{ title: 'Dashboard', href: '/admin/dashboard' }]}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                    <CardHeader>
                        <CardDescription>Total Students</CardDescription>
                        <CardTitle className="text-3xl">{stats?.totalStudents || 0}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardDescription>Total Teachers</CardDescription>
                        <CardTitle className="text-3xl">{stats?.totalTeachers || 0}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardDescription>Total Branches</CardDescription>
                        <CardTitle className="text-3xl">{stats?.totalBranches || 0}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardDescription>Monthly Revenue</CardDescription>
                        <CardTitle className="text-3xl">৳{stats?.monthlyRevenue || 0}</CardTitle>
                    </CardHeader>
                </Card>
            </div>
        </AdminPage>
    );
}
