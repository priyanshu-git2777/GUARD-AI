export type HealthData = {
  service: string;
  status: string;
  version: string;
};

export type HealthApiResponse = {
  success: boolean;
  data: HealthData;
  timestamp: string;
};
