// src/components/CourseCard.jsx
import TaskItem from "./TaskItem";

export default function CourseCard({ course, index, onMutateCourse }) {
  /* =========================================================
     TASK 4 — Interactivity (Toggle + Delete ONLY)
     ---------------------------------------------------------
     1) Implement toggleTask(id) using onMutateCourse + .map()
     2) Implement deleteTask(id) using onMutateCourse + .filter()
     ========================================================= */

    function toggleTask(id) {
        // Toggle task.isDone for the task with matching id
        onMutateCourse(index, (tasks) =>
            tasks.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
        );
    }

    function deleteTask(id) {
        // Removing the task with matching id
        onMutateCourse(index, (tasks) => tasks.filter((t) => t.id !== id));
    }

    const hasTasks = course.tasks.length > 0;
    const allDone = hasTasks && course.tasks.every((t) => t.isDone);

    return (
        <article className="course card">
            <header className="cardHeader">
                <h2>{course.title}</h2>

                {/* TASK 3: Show badge only if has tasks AND all are done */}
                {allDone && <span className="badge">All caught up</span>}
            </header>

            <section className="tasksSection">
                {/* TASK 3: Show message only when there are no tasks */}
                {course.tasks.length === 0 && <p className="empty">No tasks yet.</p>}

                <ul className="tasks">
          {/* TODO (TASK 2): Render tasks using course.tasks.map(...)*/}
              {course.tasks.map((task) => (
                      <TaskItem
                          key={task.id}
                          task={task}
                          onToggle={toggleTask}
                          onDelete={deleteTask}
                      />
                  ))}
              </ul>
              </section>
              </article>
              );
          }