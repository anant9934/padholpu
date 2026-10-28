import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Bell, MessageSquare, Info } from "lucide-react";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { formatDistanceToNow } from "date-fns";
import { apiRequest } from "@/lib/queryClient";
import { useLocation } from "wouter";

export function NotificationBell() {
  const queryClient = useQueryClient();
  const [, setLocation] = useLocation();

  const { data: notifications = [] } = useQuery<any[]>({
    queryKey: ["/api/notifications"],
    refetchInterval: 30000, // Refetch every 30s to stay updated
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markReadMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("PATCH", `/api/notifications/${id}/read`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/notifications"] });
    }
  });

  const markAllReadMutation = useMutation({
    mutationFn: async () => {
      await apiRequest("POST", "/api/notifications/read-all");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/notifications"] });
    }
  });

  const handleNotificationClick = (notification: any) => {
    if (!notification.isRead) {
      markReadMutation.mutate(notification.id);
    }
    if (notification.link) {
      setLocation(notification.link);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "CHAT": return <MessageSquare className="w-4 h-4 text-blue-500" />;
      default: return <Info className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative hover:bg-primary/10 transition-all active:scale-95" aria-label="View notifications">
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span
              className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-background shadow-lg shadow-red-500/20 animate-in zoom-in-50 duration-150"
            >
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0 overflow-hidden bg-white border-primary/20 shadow-2xl z-[100]" align="end">
        <div className="p-4 border-b border-primary/10 flex items-center justify-between bg-primary/5">
          <h4 className="font-bold text-sm tracking-tight text-foreground">Notifications</h4>
          {unreadCount > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-[10px] h-7 hover:text-primary p-0 h-auto font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => markAllReadMutation.mutate()}
            >
              Mark all read
            </Button>
          )}
        </div>
        <ScrollArea className="h-80">
          {notifications.length === 0 ? (
            <div className="p-12 text-center">
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/10">
                <Bell className="w-6 h-6 text-primary/20" />
              </div>
              <p className="text-xs font-semibold text-muted-foreground/60 tracking-tight">Your notification inbox is empty</p>
            </div>
          ) : (
            <div className="flex flex-col">
              {notifications.map((n) => (
                <button
                  key={n.id}
                  onClick={() => handleNotificationClick(n)}
                  className={`flex items-start gap-4 p-4 text-left transition-all border-b border-primary/5 last:border-0 hover:bg-primary/5 active:bg-primary/10 ${!n.isRead ? "bg-primary/[0.03]" : ""}`}
                >
                  <div className={`mt-0.5 p-2 rounded-xl border ${!n.isRead ? "bg-primary/10 border-primary/20" : "bg-muted/50 border-muted"}`}>
                    {getIcon(n.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className={`text-sm leading-tight tracking-tight ${!n.isRead ? "font-bold text-foreground" : "font-medium text-foreground/80"}`}>
                      {n.title}
                    </p>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed font-medium">
                      {n.message}
                    </p>
                    <p className="text-[10px] text-muted-foreground/50 font-bold flex items-center gap-1.5 uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      {formatDistanceToNow(new Date(n.createdAt), { addSuffix: true })}
                    </p>
                  </div>
                  {!n.isRead && (
                    <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0 animate-pulse shadow-sm shadow-primary/50" />
                  )}
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
