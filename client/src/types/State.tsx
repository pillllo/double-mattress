import { ProjectionApiResponse } from "./ApiResponses";
import { DashboardResponseObject } from "./DashboardTypes";
import {User} from "./User"
export interface State {
  userId: string;
  partnerId: string;
  mainUser: User|{};
  partnerUser:User|{};
  projectionData:ProjectionApiResponse[];
  dashboardData: DashboardResponseObject|{};
  switch: boolean;
  dataSwitch:boolean;
  projectionDate: Date;
  dashboardDate: Date;
};
