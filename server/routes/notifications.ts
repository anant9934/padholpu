import { Router } from "express";
import { storage } from "../storage";

const router = Router();

// Get all notifications for the current user
router.get("/", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    const notifications = await storage.getNotifications((req.user as any).id);
    res.json(notifications);
  } catch (err) {
    console.error("[NOTIFICATIONS] Failed to fetch:", err);
    res.status(500).json({ message: "Failed to fetch notifications" });
  }
});

// Mark a specific notification as read
router.patch("/:id/read", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    const { id } = req.params;
    await storage.markNotificationAsRead(Number(id));
    res.sendStatus(200);
  } catch (err) {
    console.error("[NOTIFICATIONS] Failed to mark as read:", err);
    res.status(500).json({ message: "Failed to update notification" });
  }
});

// Mark all notifications as read for the current user
router.post("/read-all", async (req, res) => {
  if (!req.isAuthenticated()) return res.sendStatus(401);
  try {
    await storage.markAllNotificationsAsRead((req.user as any).id);
    res.sendStatus(200);
  } catch (err) {
    console.error("[NOTIFICATIONS] Failed to mark all as read:", err);
    res.status(500).json({ message: "Failed to update notifications" });
  }
});

export default router;
