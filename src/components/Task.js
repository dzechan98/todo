function Task({
    jobs,
    toggleCompleted = () => {},
    isCompleted,
    handleDelete = () => {},
    deleteAll = () => {},
}) {
    return (
        <div className="tasks">
            {jobs.length > 0 &&
                jobs.map((job, index) => (
                    <div
                        className={`task ${job.isCompleted ? "active" : ""}`}
                        key={index}
                    >
                        <div className="left">
                            <input
                                type="checkbox"
                                value={job.value}
                                checked={job.isCompleted}
                                onChange={() => toggleCompleted(index)}
                            />
                            <span onClick={() => toggleCompleted(index)}>
                                {job.value}
                            </span>
                        </div>
                        {isCompleted && (
                            <button
                                className="right"
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            {isCompleted && (
                <button className="right" onClick={deleteAll}>
                    Delete All
                </button>
            )}
        </div>
    );
}

export default Task;
