-- How many tasks are in the task table?

SELECT COUNT(*) AS total_tasks
FROM task;

-- How many tasks in the task table do not have a valid due date?

SELECT COUNT(*) AS none_date
FROM task
WHERE due_date IS NULL;

-- Find all the tasks that are marked as done.

SELECT t.id, t.title, s.name AS status
FROM task t
JOIN status s ON s.id = t.status_id
WHERE s.name = 'Done';

-- Find all the tasks that are not marked as done.

SELECT t.id, t.title, s.name AS status
FROM task t
JOIN status s ON s.id = t.status_id
WHERE s.name <> 'Done';

-- Get all the tasks, sorted with the most recently created first.

SELECT t.id, t.title, t.created
FROM task t
ORDER BY t.created DESC;

-- Get the single most recently created task.

SELECT t.id, t.title, t.created
FROM task t
ORDER BY t.created DESC
LIMIT 1;

-- Get the title and due date of all tasks where the title or description contains database.

SELECT t.title, t.due_date
FROM task t
WHERE t.title LIKE '%database%'
   OR t.description LIKE '%database%';

-- Get the title and status (as text) of all tasks.

SELECT t.title, s.name AS status
FROM task t
LEFT JOIN status s ON s.id = t.status_id;

-- Get the name of each status, along with a count of how many tasks have that status.

SELECT s.name AS status, COUNT(t.id) AS quantity_tasks
FROM status s
LEFT JOIN task t ON t.status_id = s.id
GROUP BY s.id, s.name;

-- Get the names of all statuses, sorted by the status with most tasks first.

SELECT s.name AS status, COUNT(t.id) AS quantity_tasks
FROM status s
LEFT JOIN task t ON t.status_id = s.id
GROUP BY s.id, s.name
ORDER BY quantity_tasks DESC;


