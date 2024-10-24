import { createContext, useContext } from 'react';
import type { DeviceContextType } from './types';

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
