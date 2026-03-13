import { useState } from "react";
import { useNotificationStore } from "../../store/notification.store";


export const NotificationBell = () => {
    const notifications = useNotificationStore((n) => n.notifications);
    const addNotifications = useNotificationStore((n) => n.addNotifications);
    const markAsRead = useNotificationStore((n) => n.markAsRead);
    const markAllAsRead = useNotificationStore((n) => n.markAllAsRead);
    const clearAll = useNotificationStore((n) => n.clearAll);

    const notificationList = Object.values(notifications);
    const unReadCount = notificationList.filter((n) => !n.isRead).length;

    const handleAddNotifications=()=>{
        if(!inputValue.trim()) return;
        addNotifications({
            id:Date.now().toString(),
            message:inputValue,
            isRead:false,
            timeStamp:Date.now(),
        });
        setInputValue("");
    }
    const[inputValue,setInputValue]=useState("");
    return (
        <div>
            <div>
                <label>Add Message</label>
                <input 
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
                <button onClick={()=>handleAddNotifications()}>Add</button>
            </div>
            <div>
                <span>🔔 {unReadCount} unread</span>
                <button onClick={() => markAllAsRead()}>Mark all read</button>
                <button onClick={() => clearAll()}>Clear All</button>
            </div>

            {notificationList.length === 0 ? (
                <p>No notifications added yet</p>
            ) : (
                notificationList.map((notification) => (
                    <div key={notification.id}
                     style={{ opacity: notification.isRead ? 0.4 : 1 }}
                    >
                        <div style={{display:"flex", gap:'10px'}}>
                        <span>{notification.message}</span>
                        <span>{notification.timeStamp}</span>

                        <div>
                            <button onClick={() => markAsRead(notification.id)}>Mark read</button>
                        </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

