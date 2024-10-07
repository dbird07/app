import React, { createContext, useState, useContext, ReactNode } from 'react';

// Rename RoomListDataInterface to DeviceListDataInterface
export interface DeviceListDataInterface {
  id: string;
  roomName: string;
  treatStatus: string;
  countDown: string;
}

interface DeviceContextType {
  devices: DeviceListDataInterface[];
  addDevice: (device: DeviceListDataInterface) => void;
  updateDevice: (
    id: string,
    updatedDevice: Partial<DeviceListDataInterface>,
  ) => void;
  getDevice: (id: string) => DeviceListDataInterface | undefined;
}

const DeviceContext = createContext<DeviceContextType | undefined>(undefined);

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevices must be used within a DeviceProvider');
  }
  return context;
};

export const DeviceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [devices, setDevices] = useState<DeviceListDataInterface[]>([]);

  const addDevice = (device: DeviceListDataInterface) => {
    setDevices((prevDevices) => [...prevDevices, device]);
  };

  const updateDevice = (
    id: string,
    updatedDevice: Partial<DeviceListDataInterface>,
  ) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id ? { ...device, ...updatedDevice } : device,
      ),
    );
  };

  const getDevice = (id: string) => {
    return devices.find((device) => device.id === id);
  };

  return (
    <DeviceContext.Provider
      value={{ devices, addDevice, updateDevice, getDevice }}
    >
      {children}
    </DeviceContext.Provider>
  );
};
