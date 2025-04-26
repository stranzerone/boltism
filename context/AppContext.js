import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [complex, setComplex] = useState(null);

  // Mock data initialization
  useEffect(() => {
    // Simulate loading user data
    setTimeout(() => {
      setUser({
        id: 'user123',
        name: 'John Smith',
        email: 'johnsmith@example.com',
        phone: '+1 (555) 123-4567',
        apartment: 'A-301',
      });
      
      setComplex({
        id: 'complex123',
        name: 'Green Valley Apartments',
        address: '123 Main Street, Anytown, CA 12345',
        image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      });
      
      setNotifications([
        {
          id: 'notif1',
          title: 'Payment Due',
          message: 'Your monthly maintenance payment is due in 3 days',
          time: '2 hours ago',
          read: false,
          type: 'payment',
        },
        {
          id: 'notif2',
          title: 'Water Outage',
          message: 'Scheduled water maintenance on Friday, 10 AM - 2 PM',
          time: '1 day ago',
          read: true,
          type: 'maintenance',
        },
        {
          id: 'notif3',
          title: 'New Notice',
          message: 'Community meeting this Saturday at the common hall',
          time: '2 days ago',
          read: true,
          type: 'notice',
        },
      ]);
      
      setLoading(false);
    }, 1500);
  }, []);

  const markNotificationAsRead = (notificationId) => {
    setNotifications(
      notifications.map((notification) => 
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const unreadNotificationsCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <AppContext.Provider
      value={{
        user,
        notifications,
        loading,
        complex,
        unreadNotificationsCount,
        markNotificationAsRead,
        clearAllNotifications,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);