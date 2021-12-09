import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReduxState } from "../types/ReduxState";
import NotificationSingle from "../atoms/NotificationSingle";
import NotificationConnection from "../atoms/NotificationConnection";
export default function Notifications() {
  const notificationsArr = useSelector((state: ReduxState) => {
    return state.displayCategories.notifications;
  });

  const [notifs, setNotifs] = useState<any[]>([]);

  useEffect(() => {
    console.log(notificationsArr);
    const newNotifications = notificationsArr.map((notification) => {
      console.log(notification);
      return (
        <NotificationConnection key={notification.notificationId} notification={notification} notificationsArr={notificationsArr}/>
      );
    });
    setNotifs(newNotifications);
  }, [notificationsArr]);

  return (
    <Flex align="center" direction="column" h="75vh" w="90vw" overflowY="auto">
      {notifs}
    </Flex>
  );
}
