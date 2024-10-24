export interface DeviceListDataInterface {
  id: string;
  roomName: string;
  treatStatus: string;
  countDown: string;
}

export interface DeviceContextType {
  devices: DeviceListDataInterface[];
  addDevice: (device: DeviceListDataInterface) => void;
  updateDevice: (
    id: string,
    updatedDevice: Partial<DeviceListDataInterface>,
  ) => void;
  getDevice: (id: string) => DeviceListDataInterface | undefined;
}
