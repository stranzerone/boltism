import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '12345',
    name: 'John Doe',
    complex: 'The Palms',
    unit: 'A-301',
    profileImage: null
  });
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Maintenance Notice', message: 'Water supply will be interrupted on Sunday from 10 AM to 2 PM', read: false, date: '2023-05-15' },
    { id: 2, title: 'New Announcement', message: 'Annual general meeting scheduled for next month', read: true, date: '2023-05-10' },
  ]);
  
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'Sarah Johnson', purpose: 'Delivery', status: 'Approved', date: '2023-05-18', time: '14:00' },
    { id: 2, name: 'Mike Peters', purpose: 'Guest', status: 'Pending', date: '2023-05-20', time: '16:30' },
  ]);
  
  const [bills, setBills] = useState([
    { id: 1, type: 'Maintenance', amount: 2500, dueDate: '2023-05-25', status: 'Unpaid' },
    { id: 2, type: 'Electricity', amount: 1800, dueDate: '2023-05-20', status: 'Paid', paidOn: '2023-05-15' },
  ]);
  
  const [serviceRequests, setServiceRequests] = useState([
    { id: 1, type: 'Plumbing', description: 'Leaking tap in master bathroom', status: 'Pending', createdOn: '2023-05-16' },
    { id: 2, type: 'Electrical', description: 'Power fluctuation in kitchen', status: 'In Progress', createdOn: '2023-05-14' },
  ]);
  
  const [staff, setStaff] = useState([
    { id: 1, name: 'Lisa Kumar', role: 'Housekeeper', status: 'Active', contact: '9876543210' },
    { id: 2, name: 'Ravi Singh', role: 'Security', status: 'Active', contact: '8765432109' },
  ]);
  
  const [energyData, setEnergyData] = useState({
    currentReading: 1456,
    lastReading: 1356,
    consumption: 100,
    lastUpdated: '2023-05-15'
  });
  
  const value = {
    user,
    notifications,
    visitors,
    bills,
    serviceRequests,
    staff,
    energyData,
    setUser,
    setNotifications,
    setVisitors,
    setBills,
    setServiceRequests,
    setStaff,
    setEnergyData
  };
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};