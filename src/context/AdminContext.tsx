import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import {
  Order,
  Payment,
  PaymentRecord,
  StatusHistory,
  Reservation,
  CateringRequest,
  MenuItem,
  MenuCategory,
  NotificationLog,
  AdminActionLog,
  DashboardMetrics,
  ContentBlock,
  PromoBanner,
  Status,
  PaymentStatus,
  ReservationStatus,
  CateringStatus,
  NotificationType,
  NotificationStatus,
  PaymentMethod,
  OrderType,
  Address,
  Customer,
  OrderItem,
} from '../types';

interface AdminContextType {
  // Orders
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateOrderStatus: (orderId: string, status: Status) => void;
  updateOrderPaymentStatus: (orderId: string, status: PaymentStatus) => void;
  getOrderById: (id: string) => Order | undefined;

  // Payments
  payments: Payment[];
  paymentRecords: PaymentRecord[];
  addPayment: (payment: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) => void;
  addPaymentRecord: (record: Omit<PaymentRecord, 'id' | 'createdAt'>) => void;

  // Status History
  statusHistory: StatusHistory[];
  addStatusHistory: (history: Omit<StatusHistory, 'id'>) => void;

  // Reservations
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateReservationStatus: (id: string, status: ReservationStatus) => void;

  // Catering Requests
  cateringRequests: CateringRequest[];
  addCateringRequest: (request: Omit<CateringRequest, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCateringStatus: (id: string, status: CateringStatus) => void;

  // Menu
  menuItems: MenuItem[];
  menuCategories: MenuCategory[];
  addMenuItem: (item: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateMenuItem: (id: string, updates: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  addMenuCategory: (category: Omit<MenuCategory, 'id' | 'createdAt'>) => void;

  // Notifications
  notifications: NotificationLog[];
  addNotification: (notification: Omit<NotificationLog, 'id' | 'sentAt'>) => void;
  resendNotification: (id: string) => void;

  // Admin Actions
  adminActions: AdminActionLog[];
  logAdminAction: (action: Omit<AdminActionLog, 'id' | 'timestamp'>) => void;

  // Content Management
  contentBlocks: ContentBlock[];
  updateContentBlock: (id: string, updates: Partial<ContentBlock>) => void;

  // Promo Banners
  promoBanners: PromoBanner[];
  updatePromoBanner: (id: string, updates: Partial<PromoBanner>) => void;

  // Dashboard Metrics
  getDashboardMetrics: () => DashboardMetrics;

  // Reports
  generateReport: (startDate: string, endDate: string) => any;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  // Initialize state with sample data
  const [orders, setOrders] = useState<Order[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [paymentRecords, setPaymentRecords] = useState<PaymentRecord[]>([]);
  const [statusHistory, setStatusHistory] = useState<StatusHistory[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [cateringRequests, setCateringRequests] = useState<CateringRequest[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [notifications, setNotifications] = useState<NotificationLog[]>([]);
  const [adminActions, setAdminActions] = useState<AdminActionLog[]>([]);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>([]);
  const [promoBanners, setPromoBanners] = useState<PromoBanner[]>([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const loadData = () => {
      const savedOrders = localStorage.getItem('mh_orders');
      const savedPayments = localStorage.getItem('mh_payments');
      const savedReservations = localStorage.getItem('mh_reservations');
      const savedCatering = localStorage.getItem('mh_catering');
      const savedMenuItems = localStorage.getItem('mh_menuItems');
      const savedCategories = localStorage.getItem('mh_menuCategories');
      const savedNotifications = localStorage.getItem('mh_notifications');
      const savedStatusHistory = localStorage.getItem('mh_statusHistory');
      const savedContentBlocks = localStorage.getItem('mh_contentBlocks');
      const savedPromoBanners = localStorage.getItem('mh_promoBanners');
      const savedPaymentRecords = localStorage.getItem('mh_paymentRecords');
      const savedAdminActions = localStorage.getItem('mh_adminActions');

      if (savedOrders) setOrders(JSON.parse(savedOrders));
      if (savedPayments) setPayments(JSON.parse(savedPayments));
      if (savedReservations) setReservations(JSON.parse(savedReservations));
      if (savedCatering) setCateringRequests(JSON.parse(savedCatering));
      if (savedMenuItems) setMenuItems(JSON.parse(savedMenuItems));
      if (savedCategories) setMenuCategories(JSON.parse(savedCategories));
      if (savedNotifications) setNotifications(JSON.parse(savedNotifications));
      if (savedStatusHistory) setStatusHistory(JSON.parse(savedStatusHistory));
      if (savedContentBlocks) setContentBlocks(JSON.parse(savedContentBlocks));
      if (savedPromoBanners) setPromoBanners(JSON.parse(savedPromoBanners));
      if (savedPaymentRecords) setPaymentRecords(JSON.parse(savedPaymentRecords));
      if (savedAdminActions) setAdminActions(JSON.parse(savedAdminActions));
    };
    loadData();
  }, []);

  // Save to localStorage helper
  const saveToStorage = useCallback((key: string, data: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
    }
  }, []);

  // Admin Actions - declared first so it can be used by others
  const logAdminAction = useCallback((actionData: Omit<AdminActionLog, 'id' | 'timestamp'>) => {
    const newAction: AdminActionLog = {
      ...actionData,
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
    };
    setAdminActions(prev => {
      const updated = [newAction, ...prev];
      saveToStorage('mh_adminActions', updated);
      return updated;
    });
  }, [saveToStorage]);

  // Notifications - declared early
  const addNotification = useCallback((notificationData: Omit<NotificationLog, 'id' | 'sentAt'>) => {
    const newNotification: NotificationLog = {
      ...notificationData,
      id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      sentAt: new Date().toISOString(),
    };
    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      saveToStorage('mh_notifications', updated);
      return updated;
    });
  }, [saveToStorage]);

  const resendNotification = useCallback((id: string) => {
    setNotifications(prev => {
      const notification = prev.find(n => n.id === id);
      if (notification) {
        const resentNotification: NotificationLog = {
          ...notification,
          id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          sentAt: new Date().toISOString(),
          status: 'sent',
        };
        const updated = [resentNotification, ...prev];
        saveToStorage('mh_notifications', updated);
        logAdminAction({
          action: 'Resend Notification',
          entityType: 'Notification',
          entityId: id,
          details: `Resent ${notification.type} notification`,
        });
        return updated;
      }
      return prev;
    });
  }, [saveToStorage, logAdminAction]);

  // Status History
  const addStatusHistory = useCallback((historyData: Omit<StatusHistory, 'id'>) => {
    const newHistory: StatusHistory = {
      ...historyData,
      id: `hist_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    };
    setStatusHistory(prev => {
      const updated = [newHistory, ...prev];
      saveToStorage('mh_statusHistory', updated);
      return updated;
    });
  }, [saveToStorage]);

  // Orders
  const addOrder = useCallback((orderData: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setOrders(prev => {
      const updated = [...prev, newOrder];
      saveToStorage('mh_orders', updated);
      return updated;
    });
    logAdminAction({
      action: 'Create Order',
      entityType: 'Order',
      entityId: newOrder.id,
      details: `Order #${newOrder.orderNumber} created for ${newOrder.customer.name}`,
    });
  }, [saveToStorage, logAdminAction]);

  const updateOrderStatus = useCallback((orderId: string, newStatus: Status) => {
    setOrders(prev => {
      const updated = prev.map(order => {
        if (order.id === orderId) {
          const oldStatus = order.status;
          const updatedOrder = {
            ...order,
            status: newStatus,
            updatedAt: new Date().toISOString(),
            ...(newStatus === 'completed' && { completedAt: new Date().toISOString() }),
          };

          addStatusHistory({
            orderId,
            previousStatus: oldStatus,
            newStatus,
            timestamp: new Date().toISOString(),
            notificationSent: false,
          });

          const orderForNotification = updatedOrder;
          addNotification({
            phoneNumber: orderForNotification.customer.phone,
            type: 'order_update',
            message: `Your order #${orderForNotification.orderNumber} status has been updated to ${newStatus.replace('_', ' ')}`,
            status: 'pending',
            orderId: orderForNotification.id,
          });

          logAdminAction({
            action: 'Update Order Status',
            entityType: 'Order',
            entityId: orderId,
            details: `Status changed from ${oldStatus} to ${newStatus}`,
          });

          return updatedOrder;
        }
        return order;
      });
      saveToStorage('mh_orders', updated);
      return updated;
    });
  }, [saveToStorage, addStatusHistory, addNotification, logAdminAction]);

  const updateOrderPaymentStatus = useCallback((orderId: string, newStatus: PaymentStatus) => {
    setOrders(prev => {
      const updated = prev.map(order => {
        if (order.id === orderId) {
          const updatedOrder = {
            ...order,
            paymentStatus: newStatus,
            updatedAt: new Date().toISOString(),
          };

          addNotification({
            phoneNumber: order.customer.phone,
            type: 'payment_confirmation',
            message: `Payment status for order #${order.orderNumber} updated to ${newStatus}`,
            status: 'pending',
            orderId: order.id,
          });

          logAdminAction({
            action: 'Update Payment Status',
            entityType: 'Order',
            entityId: orderId,
            details: `Payment status updated to ${newStatus}`,
          });

          return updatedOrder;
        }
        return order;
      });
      saveToStorage('mh_orders', updated);
      return updated;
    });
  }, [saveToStorage, addNotification, logAdminAction]);

  const getOrderById = useCallback((id: string) => {
    return orders.find(o => o.id === id);
  }, [orders]);

  // Payments
  const addPayment = useCallback((paymentData: Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newPayment: Payment = {
      ...paymentData,
      id: `pay_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setPayments(prev => {
      const updated = [...prev, newPayment];
      saveToStorage('mh_payments', updated);
      return updated;
    });
  }, [saveToStorage]);

  const addPaymentRecord = useCallback((recordData: Omit<PaymentRecord, 'id' | 'createdAt'>) => {
    const newRecord: PaymentRecord = {
      ...recordData,
      id: `rec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    setPaymentRecords(prev => {
      const updated = [...prev, newRecord];
      saveToStorage('mh_paymentRecords', updated);
      return updated;
    });
  }, [saveToStorage]);

  // Reservations
  const addReservation = useCallback((reservationData: Omit<Reservation, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newReservation: Reservation = {
      ...reservationData,
      id: `res_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setReservations(prev => {
      const updated = [...prev, newReservation];
      saveToStorage('mh_reservations', updated);
      return updated;
    });
    logAdminAction({
      action: 'Create Reservation',
      entityType: 'Reservation',
      entityId: newReservation.id,
      details: `Reservation for ${newReservation.name} - ${newReservation.guests} guests`,
    });
  }, [saveToStorage, logAdminAction]);

  const updateReservationStatus = useCallback((id: string, newStatus: ReservationStatus) => {
    setReservations(prev => {
      const updated = prev.map(res => {
        if (res.id === id) {
          const updatedRes = {
            ...res,
            status: newStatus,
            updatedAt: new Date().toISOString(),
          };
          addNotification({
            phoneNumber: res.phone,
            type: 'reservation_update',
            message: `Your reservation for ${res.date} at ${res.time} has been ${newStatus}`,
            status: 'pending',
            reservationId: res.id,
          });
          logAdminAction({
            action: 'Update Reservation Status',
            entityType: 'Reservation',
            entityId: id,
            details: `Status changed to ${newStatus}`,
          });
          return updatedRes;
        }
        return res;
      });
      saveToStorage('mh_reservations', updated);
      return updated;
    });
  }, [saveToStorage, addNotification, logAdminAction]);

  // Catering Requests
  const addCateringRequest = useCallback((requestData: Omit<CateringRequest, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newRequest: CateringRequest = {
      ...requestData,
      id: `cat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setCateringRequests(prev => {
      const updated = [...prev, newRequest];
      saveToStorage('mh_catering', updated);
      return updated;
    });
    logAdminAction({
      action: 'Create Catering Request',
      entityType: 'Catering',
      entityId: newRequest.id,
      details: `Catering request for ${newRequest.eventType} - ${newRequest.guests} guests`,
    });
  }, [saveToStorage, logAdminAction]);

  const updateCateringStatus = useCallback((id: string, newStatus: CateringStatus) => {
    setCateringRequests(prev => {
      const updated = prev.map(req => {
        if (req.id === id) {
          const updatedReq = {
            ...req,
            status: newStatus,
            updatedAt: new Date().toISOString(),
          };
          addNotification({
            phoneNumber: req.phone,
            type: 'catering_update',
            message: `Your catering request for ${req.eventType} has been ${newStatus}`,
            status: 'pending',
            cateringId: req.id,
          });
          logAdminAction({
            action: 'Update Catering Status',
            entityType: 'Catering',
            entityId: id,
            details: `Status changed to ${newStatus}`,
          });
          return updatedReq;
        }
        return req;
      });
      saveToStorage('mh_catering', updated);
      return updated;
    });
  }, [saveToStorage, addNotification, logAdminAction]);

  // Menu
  const addMenuItem = useCallback((itemData: Omit<MenuItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const newItem: MenuItem = {
      ...itemData,
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setMenuItems(prev => {
      const updated = [...prev, newItem];
      saveToStorage('mh_menuItems', updated);
      return updated;
    });
    logAdminAction({
      action: 'Add Menu Item',
      entityType: 'MenuItem',
      entityId: newItem.id,
      details: `Added ${newItem.name} to ${menuCategories.find(c => c.id === newItem.categoryId)?.name}`,
    });
  }, [menuItems, menuCategories, saveToStorage, logAdminAction]);

  const updateMenuItem = useCallback((id: string, updates: Partial<MenuItem>) => {
    setMenuItems(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          const updatedItem = {
            ...item,
            ...updates,
            updatedAt: new Date().toISOString(),
          };
          logAdminAction({
            action: 'Update Menu Item',
            entityType: 'MenuItem',
            entityId: id,
            details: `Updated ${item.name}`,
          });
          return updatedItem;
        }
        return item;
      });
      saveToStorage('mh_menuItems', updated);
      return updated;
    });
  }, [saveToStorage, logAdminAction]);

  const deleteMenuItem = useCallback((id: string) => {
    setMenuItems(prev => {
      const updated = prev.filter(item => item.id !== id);
      saveToStorage('mh_menuItems', updated);
      logAdminAction({
        action: 'Delete Menu Item',
        entityType: 'MenuItem',
        entityId: id,
        details: 'Menu item deleted',
      });
      return updated;
    });
  }, [saveToStorage, logAdminAction]);

  const addMenuCategory = useCallback((categoryData: Omit<MenuCategory, 'id' | 'createdAt'>) => {
    const newCategory: MenuCategory = {
      ...categoryData,
      id: `cat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };
    setMenuCategories(prev => {
      const updated = [...prev, newCategory];
      saveToStorage('mh_menuCategories', updated);
      return updated;
    });
    logAdminAction({
      action: 'Add Menu Category',
      entityType: 'MenuCategory',
      entityId: newCategory.id,
      details: `Added category: ${newCategory.name}`,
    });
  }, [saveToStorage, logAdminAction]);

  // Content Management
  const updateContentBlock = useCallback((id: string, updates: Partial<ContentBlock>) => {
    setContentBlocks(prev => {
      const updated = prev.map(block => {
        if (block.id === id) {
          return {
            ...block,
            ...updates,
            updatedAt: new Date().toISOString(),
          };
        }
        return block;
      });
      saveToStorage('mh_contentBlocks', updated);
      return updated;
    });
  }, [saveToStorage]);

  // Promo Banners
  const updatePromoBanner = useCallback((id: string, updates: Partial<PromoBanner>) => {
    setPromoBanners(prev => {
      const updated = prev.map(banner => {
        if (banner.id === id) {
          return {
            ...banner,
            ...updates,
            updatedAt: new Date().toISOString(),
          };
        }
        return banner;
      });
      saveToStorage('mh_promoBanners', updated);
      return updated;
    });
  }, [saveToStorage]);

  // Dashboard Metrics
  const getDashboardMetrics = useCallback((): DashboardMetrics => {
    const now = new Date();
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const ordersByStatus: Record<Status, number> = {
      new: 0,
      confirmed: 0,
      preparing: 0,
      ready: 0,
      out_for_delivery: 0,
      completed: 0,
      cancelled: 0,
    };

    orders.forEach(order => {
      ordersByStatus[order.status]++;
    });

    const paymentSummary: Record<PaymentStatus, number> = {
      pending: 0,
      partial: 0,
      paid: 0,
      failed: 0,
      cancelled: 0,
    };

    orders.forEach(order => {
      paymentSummary[order.paymentStatus]++;
    });

    // Calculate popular items
    const itemCount: Record<string, { name: string; count: number }> = {};
    orders.forEach(order => {
      order.items.forEach(item => {
        if (!itemCount[item.name]) {
          itemCount[item.name] = { name: item.name, count: 0 };
        }
        itemCount[item.name].count += item.quantity;
      });
    });

    const popularItems = Object.values(itemCount)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Revenue by day for last 7 days
    const revenueByDay: Array<{ date: string; amount: number }> = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = date.toISOString().split('T')[0];
      const dayRevenue = orders
        .filter(order => {
          const orderDate = new Date(order.createdAt).toISOString().split('T')[0];
          return orderDate === dateStr && order.status === 'completed';
        })
        .reduce((sum, order) => sum + order.total, 0);
      revenueByDay.push({ date: dateStr, amount: Math.round(dayRevenue) });
    }

    return {
      totalOrders: orders.length,
      ordersByStatus,
      totalRevenue: orders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.total, 0),
      paymentSummary,
      totalReservations: reservations.length,
      totalCateringRequests: cateringRequests.length,
      popularItems,
      recentOrders: orders.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 10),
      revenueByDay,
    };
  }, [orders, reservations, cateringRequests]);

  // Reports
  const generateReport = useCallback((startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    const reportOrders = orders.filter(order => {
      const orderDate = new Date(order.createdAt);
      return orderDate >= start && orderDate <= end;
    });

    const ordersByStatus: Record<Status, number> = {
      new: 0,
      confirmed: 0,
      preparing: 0,
      ready: 0,
      out_for_delivery: 0,
      completed: 0,
      cancelled: 0,
    };

    const paymentBreakdown: Record<PaymentStatus, number> = {
      pending: 0,
      partial: 0,
      paid: 0,
      failed: 0,
      cancelled: 0,
    };

    const itemCount: Record<string, { name: string; count: number; revenue: number }> = {};

    reportOrders.forEach(order => {
      ordersByStatus[order.status]++;
      paymentBreakdown[order.paymentStatus]++;
      order.items.forEach(item => {
        if (!itemCount[item.name]) {
          itemCount[item.name] = { name: item.name, count: 0, revenue: 0 };
        }
        itemCount[item.name].count += item.quantity;
        itemCount[item.name].revenue += item.price * item.quantity;
      });
    });

    const popularItems = Object.values(itemCount)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);

    const totalRevenue = reportOrders.filter(o => o.status === 'completed').reduce((sum, o) => sum + o.total, 0);
    const reservationsCount = reservations.filter(r => {
      const resDate = new Date(r.createdAt);
      return resDate >= start && resDate <= end;
    }).length;
    const cateringRequestsCount = cateringRequests.filter(c => {
      const catDate = new Date(c.createdAt);
      return catDate >= start && catDate <= end;
    }).length;

    const report: any = {
      period: { start: startDate, end: endDate },
      totalRevenue,
      totalOrders: reportOrders.length,
      ordersByStatus,
      paymentBreakdown,
      popularItems,
      reservationsCount,
      cateringRequestsCount,
      averageOrderValue: reportOrders.length > 0 ? Math.round(totalRevenue / reportOrders.length) : 0,
    };

    return report;
  }, [orders, reservations, cateringRequests]);

  return (
    <AdminContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        updateOrderPaymentStatus,
        getOrderById,
        payments,
        paymentRecords,
        addPayment,
        addPaymentRecord,
        statusHistory,
        addStatusHistory,
        reservations,
        addReservation,
        updateReservationStatus,
        cateringRequests,
        addCateringRequest,
        updateCateringStatus,
        menuItems,
        menuCategories,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        addMenuCategory,
        notifications,
        addNotification,
        resendNotification,
        adminActions,
        logAdminAction,
        contentBlocks,
        updateContentBlock,
        promoBanners,
        updatePromoBanner,
        getDashboardMetrics,
        generateReport,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
