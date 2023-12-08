import { Task } from "../types/Task";
import { countDoneTasks } from "./countDoneTasks";

describe("countDoneTasks", () => {
  it("should return 0 when given an empty array of tasks", () => {
    const tasks: Task[] = [];
    const result = tasks.reduce(countDoneTasks, 0);
    expect(result).toBe(0);
  });

  it("should return the number of completed tasks when given an array of tasks with at least one completed task", () => {
    const tasks = [{ isDone: true }, { isDone: false }, { isDone: true }];
    const result = tasks.reduce(countDoneTasks, 0);
    expect(result).toBe(2);
  });

  it("should return 0 when given an array of tasks with no completed tasks", () => {
    const tasks = [{ isDone: false }, { isDone: false }, { isDone: false }];
    const result = tasks.reduce(countDoneTasks, 0);
    expect(result).toBe(0);
  });
});
