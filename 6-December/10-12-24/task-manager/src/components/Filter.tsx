
import { PriorityType, StatusType } from './../types/tasksTypes';

interface FilterProps {
    filterPriority: PriorityType;
    setFilterPriority: React.Dispatch<React.SetStateAction<PriorityType>>;
    filterStatus: StatusType;
    setFilterStatus: React.Dispatch<React.SetStateAction<StatusType>>;
    filterTitle: string;
    setFilterTitle: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ filterPriority, setFilterPriority, filterStatus, setFilterStatus, filterTitle, setFilterTitle } : FilterProps) => {
    return (
        <div className="filter-container">
        <h3>Filtering:</h3>
        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value as PriorityType)}>
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
        </select>

        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as StatusType)}>
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="progress">Progress</option>
            <option value="completed">Completed</option>
        </select>

        <input value={filterTitle} id='filter-title' placeholder='Search By Title...'
        onChange={(e) => setFilterTitle(e.target.value)}
        />
        </div>
    );
};

export default Filter;
