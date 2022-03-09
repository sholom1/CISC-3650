import { v4 as uuidv4 } from 'uuid';

const generateNewTask = (taskname) => {
    return {
        name: taskname || "Default task",
        id: uuidv4()
    }
}
export default generateNewTask;