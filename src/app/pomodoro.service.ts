import { Action } from './types/action';
import { Injectable } from '@angular/core';
import { DEFAULT_SETTINGS, IPomodoroSettings } from './types/settings';
import { timeoutPromise } from './utils/promise';



@Injectable({
  providedIn: 'root'
})
export class PomodoroService {
  private currentAction: Action | null | undefined = null;
  private settings: IPomodoroSettings = DEFAULT_SETTINGS;

  private session: Action[] = [];
  constructor() {
    this.buildSession(); // The Default session
  }
  /**
   * Update the pomodoro settings allow a partial update
   * @param settings: IPomodoroSettings
   */
  updateSettings(settings: IPomodoroSettings = DEFAULT_SETTINGS): void {
    this.settings = Object.assign(this.settings, settings);
  }
  async run(): Promise<any> {
    while (this.session.length) {
      this.currentAction = this.session.pop();
      timeoutPromise(this.currentAction?.play)
    }
  }

  stop(): void { }

  private buildSession(): void {
    this.session.splice(0, this.session.length);
    let i = this.settings.intervals;
    while (i--) {
      const { workDuration, shortStopDuration } = this.settings;
      this.session.push(new Action('Work', workDuration || DEFAULT_SETTINGS.workDuration));
      this.session.push(new Action('Rest', workDuration || DEFAULT_SETTINGS.shortStopDuration));
    }
    this.session[i - 1] = (new Action('Long Rest', this.settings.longStopDuration || DEFAULT_SETTINGS.longStopDuration));
  }

}
