import { Router } from 'express';
import { NotificationModel } from '../models/notification.model'; 

const router = Router();

// GET all notifications
router.get('/', async (req, res) => {
  try {
    const notifications = await NotificationModel.findAll();
    console.log('Notifications fetched:', notifications); // Debugging
    res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});


router.post('/', async (req, res) => {
  try {
    const notificationData = req.body;
    const newNotification = await NotificationModel.create(notificationData);
    res.status(201).json({
      message: 'Notification created',
      data: newNotification,
    });
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});
router.post('/', async (req, res) => {
  try {
    const { event_type, message, is_read, redirection_number } = req.body;

    // Simple validation
    if (event_type == null || message == null) {
      return res.status(400).json({ error: 'event_type and message are required' });
    }

    // Create new notification in DB
    const newNotification = await NotificationModel.create({
      event_type,
      message,
      is_read: is_read ?? false,
      redirection_number,
    });

    res.status(201).json(newNotification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});



// PATCH mark all notifications as read (you can add DB update logic here)
router.patch('/read/all', (req, res) => {
  res.json({
    message: 'All notifications marked as read',
  });
});

// DELETE a notification by id (you can add DB delete logic here)
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: `Notification with ID ${id} deleted`,
  });
});

// DELETE all notifications (you can add DB delete logic here)
router.delete('/', (req, res) => {
  res.json({ message: 'All notifications deleted' });
});

export default router;
