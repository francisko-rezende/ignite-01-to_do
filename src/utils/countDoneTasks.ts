export function countDoneTasks<T extends { isDone: boolean }>(
  acc: number,
  task: T,
) {
  return task.isDone ? ++acc : acc;
}
