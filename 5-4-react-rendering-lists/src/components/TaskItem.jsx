// src/components/Task Item.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className="task">
            <label className="taskMain">
                {/* TASK 4: Checkbox */}
                <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => onToggle(task.id)}
                />

                {/* TASK 3: Show DueBadge ONLY when task is NOT done */}
                {!task.isDone && <DueBadge dueDate={task.dueDate} />}

                {/* TASK 2: Display task title */}
                <span className="title">{task.title}</span>
            </label>

            {/* TASK 4: Delete button */}
            <button
                className="ghost"
                aria-label="Delete task"
                onClick={() => onDelete(task.id)}
            >
                ✕
            </button>
        </li>
    );
}