import { createContext, useContext } from 'react';
import { DeviceListDataInterface } from './types';

export interface DeviceContextType {
  devices: DeviceListDataInterface[];
  addDevice: (device: DeviceListDataInterface) => void;
  updateDevice: (
    id: string,
    updatedDevice: Partial<DeviceListDataInterface>,
  ) => void;
  getDevice: (id: string) => DeviceListDataInterface | undefined;
}
export const DeviceContext = createContext<DeviceContextType | undefined>(
  undefined,
);

export const useDevices = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevices must be used within a DeviceProvider');
  }
  return context;
};
