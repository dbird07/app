import React, { useState, ReactNode } from 'react';
import { DeviceListDataInterface, DeviceContextType } from './types';
import { DeviceContext, useDevices } from './use-devices.hook';

export const DeviceProvider: React.FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const [devices, setDevices] = useState<DeviceListDataInterface[]>([]);

  const addDevice = (device: DeviceListDataInterface) => {
    //make sure you dont double up on room names
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

  const value: DeviceContextType = {
    devices,
    addDevice,
    updateDevice,
    getDevice,
  };

  return (
    <DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
  );
};
