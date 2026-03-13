import { create } from "zustand";

interface Notification{
    id:string;
    message:string;
    isRead:boolean;
    timeStamp:number;
}

interface NotificationState{
    notifications: Record<string,Notification>

    // actions
    addNotifications:(notif:Notification)=>void;
    markAsRead:(id:string)=>void;
    markAllAsRead:()=>void;
    clearAll:()=>void;
}

export const useNotificationStore=create<NotificationState>((set)=>({
    notifications:{},

    addNotifications:(notif)=>set((state)=>({
        notifications: {...state.notifications, [notif.id]:notif}
    })),

    markAsRead:(id)=>set((state)=>{
        const prev={...state.notifications};
        prev[id]={...prev[id],isRead:true};
        return { notifications:prev};
    }),
    
    markAllAsRead:()=>set((state)=>{
        const prev={...state.notifications};

        for(const [id] of Object.entries(prev)){
            prev[id]={...prev[id],isRead:true};
        }

        return {notifications:prev};
    }),
    clearAll:()=>set(()=>({
        notifications:{}
    })),
}));