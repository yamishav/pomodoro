export interface IPomodoroSettings {
  /**
   * Number of interval for the requested pomodoro sessions
   */
  intervals: number;
  /**
   * Each Pomodoro is divided in to work and rest - this is
   * the work duration
   */
  workDuration?: number;
  /**
   * Each Pomodoro is divided in to work and rest - this is
   * the short stop duration
   */
  shortStopDuration?: number;
  /**
   * After a full session comes a long rest
   * This is the duration of the long reset
   */
  longStopDuration?: number
}
export const DEFAULT_SETTINGS = { intervals: 4, workDuration: 25 * 60, shortStopDuration: 5 * 60, longStopDuration: 15 * 60 }
