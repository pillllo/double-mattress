import { ProjectionApiResponse } from "./ApiResponses";
import { DashboardResponseObject } from "./DashboardTypes";
export interface State {
  userId: string;
  partnerId: string;
  projectionData:ProjectionApiResponse[];
  dashboardData: DashboardResponseObject|{};
  switch: boolean;
  dataSwitch:boolean;
  projectionDate: Date;
  dashboardDate: Date;
};
