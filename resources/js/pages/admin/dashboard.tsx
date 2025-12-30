import AdminPage from '@/layouts/admin-page-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DashboardStats {
    totalStudents: number;
    totalTeachers: number;
    totalBranches: number;
    monthlyRevenue: number;
    activeAdmissions: number;
    pendingFees: number;
    todayAttendance: number;
    recentActivities?: Array<{
        id: number;
        type: string;
        message: string;
        time: string;
    }>;
}

export default function Dashboard({ stats }: { stats: DashboardStats }) {
    return (
        <AdminPage 
            title="Admin Dashboard" 
            description="Welcome to the LMS admin panel. Here's an overview of your institution."
            breadcrumbs={[{ title: 'Dashboard', href: '/admin/dashboard' }]}
        >
            <div className="space-y-6">
                {/* Main Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Total Students</CardDescription>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-3xl font-bold">{stats?.totalStudents || 0}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                                Enrolled students
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Total Teachers</CardDescription>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-3xl font-bold">{stats?.totalTeachers || 0}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                                Teaching staff
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Total Branches</CardDescription>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-3xl font-bold">{stats?.totalBranches || 0}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                                Active branches
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Monthly Revenue</CardDescription>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                className="h-4 w-4 text-muted-foreground"
                            >
                                <line x1="12" y1="1" x2="12" y2="23" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-3xl font-bold">৳{stats?.monthlyRevenue?.toLocaleString() || 0}</CardTitle>
                            <p className="text-xs text-muted-foreground mt-1">
                                This month's income
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Secondary Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Active Admissions</CardDescription>
                            <Badge variant="secondary">{stats?.activeAdmissions || 0}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                New admissions this month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Pending Fees</CardDescription>
                            <Badge variant="destructive">৳{stats?.pendingFees?.toLocaleString() || 0}</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Outstanding fee collection
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardDescription>Today's Attendance</CardDescription>
                            <Badge variant="default">{stats?.todayAttendance || 0}%</Badge>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Student attendance rate
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activities */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activities</CardTitle>
                            <CardDescription>Latest system activities and updates</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {stats?.recentActivities && stats.recentActivities.length > 0 ? (
                                    stats.recentActivities.map((activity) => (
                                        <div key={activity.id} className="flex items-start space-x-4">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                                            <div className="flex-1 space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {activity.message}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {activity.time}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-muted-foreground">No recent activities</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Quick Actions</CardTitle>
                            <CardDescription>Common administrative tasks</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                                <a 
                                    href="/admin/students" 
                                    className="flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="text-sm font-medium">Manage Students</span>
                                </a>
                                <a 
                                    href="/admin/teachers" 
                                    className="flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="text-sm font-medium">Manage Teachers</span>
                                </a>
                                <a 
                                    href="/admin/admissions" 
                                    className="flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="text-sm font-medium">New Admission</span>
                                </a>
                                <a 
                                    href="/admin/fees" 
                                    className="flex items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent hover:text-accent-foreground transition-colors"
                                >
                                    <span className="text-sm font-medium">Collect Fees</span>
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminPage>
    );
}
