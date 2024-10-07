import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DeviceListDataInterface } from './types';

// Rename RoomListDataInterface to DeviceListDataInterface

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
