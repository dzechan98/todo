export const initialState = { job: "", jobs: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_JOB":
            return { ...state, jobs: [...state.jobs, action.payload] };
        case "SET_JOB":
            return { ...state, job: action.payload };
        case "DELETE_JOB": {
            let newJobs = state.jobs.filter(
                (job, index) => index !== action.payload
            );
            return { ...state, jobs: newJobs };
        }
        case "TOGGLE_COMPLETED": {
            const newJobs = state.jobs.map((job, index) =>
                index === action.payload
                    ? { ...job, isCompleted: !job.isCompleted }
                    : job
            );
            return { ...state, jobs: newJobs };
        }
        case "DELETE_ALL": {
            return { ...state, jobs: [] };
        }
        default:
            throw new Error("Invalid action");
    }
};

export default reducer;
