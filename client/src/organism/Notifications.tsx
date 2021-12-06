import { useSelector } from "react-redux";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ReduxState } from "../types/ReduxState";
import NotificationSingle from "../atoms/NotificationSingle";
export default function Notifications() {
  const notificationsArr = useSelector((state: ReduxState) => {
    return state.displayCategories.notifications;
  });

  const [notifs, setNotifs] = useState<any[]>([]);

  useEffect(() => {

    const newNotifications = notificationsArr.map((notification) => {
      console.log(notification);
      return (
        <NotificationSingle key={notification.id} notification={notification}/>
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
