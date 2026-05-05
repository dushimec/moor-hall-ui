import React, { useEffect, useState } from 'react';
import { useAdmin } from '../../../context/AdminContext';

// Reusable Stat Card Component
const StatCard: React.FC<{
  title: string;
  value: string | number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  trend?: { value: number; label: string };
}> = ({ title, value, icon: Icon, iconBg, trend }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        {trend && (
          <p className={`text-sm mt-2 ${trend.value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value >= 0 ? '+' : ''}{trend.value}% {trend.label}
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${iconBg}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
    </div>
  </div>
);

// SVG Icons
const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

const CurrencyDollarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const CreditCardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

// Order Status Distribution Card
const OrderStatusCard: React.FC = () => {
  const { getDashboardMetrics } = useAdmin();
  const metrics = getDashboardMetrics();
  
  const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    confirmed: 'bg-indigo-100 text-indigo-800',
    preparing: 'bg-yellow-100 text-yellow-800',
    ready: 'bg-green-100 text-green-800',
    out_for_delivery: 'bg-purple-100 text-purple-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const statusLabels: Record<string, string> = {
    new: 'New',
    confirmed: 'Confirmed',
    preparing: 'Preparing',
    ready: 'Ready',
    out_for_delivery: 'Out for Delivery',
    completed: 'Completed',
    cancelled: 'Cancelled',
  };

  const statusEntries = Object.entries(metrics.ordersByStatus) as [string, number][];
  const totalOrders = statusEntries.reduce((a, b) => a + b[1], 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Orders by Status</h3>
      <div className="space-y-4">
        {statusEntries.map(([status, count]) => (
          <div key={status} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
                {statusLabels[status]}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-900">{count}</span>
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#BF2201] h-2 rounded-full"
                  style={{ width: totalOrders > 0 ? `${(count / totalOrders) * 100}%` : '0%' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Payment Summary Card
const PaymentSummaryCard: React.FC = () => {
  const { getDashboardMetrics } = useAdmin();
  const metrics = getDashboardMetrics();

  const paymentColors: Record<string, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    partial: 'bg-blue-100 text-blue-800',
    paid: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
    cancelled: 'bg-gray-100 text-gray-800',
  };

  const paymentLabels: Record<string, string> = {
    pending: 'Pending',
    partial: 'Partial',
    paid: 'Paid',
    failed: 'Failed',
    cancelled: 'Cancelled',
  };

  const paymentEntries = Object.entries(metrics.paymentSummary) as [string, number][];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
      <div className="space-y-3">
        {paymentEntries.map(([status, count]) => (
          <div key={status} className="flex items-center justify-between">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${paymentColors[status]}`}>
              {paymentLabels[status]}
            </span>
            <span className="text-sm font-medium text-gray-900">{count} orders</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Recent Orders Table
const RecentOrdersTable: React.FC = () => {
  const { getDashboardMetrics } = useAdmin();
  const metrics = getDashboardMetrics();

  const statusColors: Record<string, string> = {
    new: 'bg-blue-100 text-blue-800',
    confirmed: 'bg-indigo-100 text-indigo-800',
    preparing: 'bg-yellow-100 text-yellow-800',
    ready: 'bg-green-100 text-green-800',
    out_for_delivery: 'bg-purple-100 text-purple-800',
    completed: 'bg-gray-100 text-gray-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {metrics.recentOrders.map((order: any) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#BF2201]">
                  #{order.orderNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {order.customer.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${order.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {order.status.replace('_', ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Popular Items List
const PopularItemsList: React.FC = () => {
  const { getDashboardMetrics } = useAdmin();
  const metrics = getDashboardMetrics();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Menu Items</h3>
      <div className="space-y-4">
        {metrics.popularItems.map((item: any, index: number) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 rounded-full bg-[#BF2201] text-white text-xs font-medium flex items-center justify-center">
                {index + 1}
              </span>
              <span className="text-sm font-medium text-gray-900">{item.name}</span>
            </div>
            <span className="text-sm text-gray-500">{item.count} orders</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Revenue Chart
const RevenueChart: React.FC = () => {
  const { getDashboardMetrics } = useAdmin();
  const metrics = getDashboardMetrics();

  const maxRevenue = Math.max(...metrics.revenueByDay.map((d: any) => d.amount), 1);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue (Last 7 Days)</h3>
      <div className="flex items-end space-x-2 h-40">
        {metrics.revenueByDay.map((day: any) => (
          <div key={day.date} className="flex-1 flex flex-col items-center">
            <div className="w-full bg-[#BF2201] rounded-t" style={{ height: `${(day.amount / maxRevenue) * 100}%` }} />
            <span className="text-xs text-gray-500 mt-2">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </span>
            <span className="text-xs font-medium text-gray-900">${day.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardPage: React.FC = () => {
  const metrics = useAdmin().getDashboardMetrics();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Real-time summary of your restaurant operations</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Orders"
          value={metrics.totalOrders}
          icon={ShoppingBagIcon}
          iconBg="bg-[#BF2201]"
          trend={{ value: 12, label: 'from last week' }}
        />
        <StatCard
          title="Total Revenue"
          value={`$${metrics.totalRevenue.toLocaleString()}`}
          icon={CurrencyDollarIcon}
          iconBg="bg-green-500"
          trend={{ value: 8, label: 'from last week' }}
        />
        <StatCard
          title="Total Reservations"
          value={metrics.totalReservations}
          icon={CalendarIcon}
          iconBg="bg-blue-500"
          trend={{ value: 5, label: 'from last week' }}
        />
        <StatCard
          title="Catering Requests"
          value={metrics.totalCateringRequests}
          icon={UsersIcon}
          iconBg="bg-purple-500"
          trend={{ value: 3, label: 'from last week' }}
        />
      </div>

      {/* Charts and Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div className="space-y-6">
          <OrderStatusCard />
          <PaymentSummaryCard />
        </div>
      </div>

      {/* Recent Orders and Popular Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentOrdersTable />
        </div>
        <div>
          <PopularItemsList />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#BF2201] hover:bg-orange-50 transition-colors">
            <ShoppingBagIcon className="h-8 w-8 text-[#BF2201] mb-2" />
            <span className="text-sm font-medium text-gray-700">New Order</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#BF2201] hover:bg-orange-50 transition-colors">
            <CalendarIcon className="h-8 w-8 text-[#BF2201] mb-2" />
            <span className="text-sm font-medium text-gray-700">New Reservation</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#BF2201] hover:bg-orange-50 transition-colors">
            <UsersIcon className="h-8 w-8 text-[#BF2201] mb-2" />
            <span className="text-sm font-medium text-gray-700">Catering</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#BF2201] hover:bg-orange-50 transition-colors">
            <ChartBarIcon className="h-8 w-8 text-[#BF2201] mb-2" />
            <span className="text-sm font-medium text-gray-700">Menu Item</span>
          </button>
          <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-[#BF2201] hover:bg-orange-50 transition-colors">
            <CreditCardIcon className="h-8 w-8 text-[#BF2201] mb-2" />
            <span className="text-sm font-medium text-gray-700">Payments</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
