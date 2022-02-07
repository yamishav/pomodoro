import { Observable, Subject } from "rxjs";

export interface IPlayable {
  play(): Observable<number>;
  stop(): Observable<number>;
}
export interface ITasks {
  todos: { title: string, description?: string, state: 'done' | 'not-done' }[];
}
export class Action implements IPlayable, ITasks {
  private timeSubject = new Subject<number>();
  constructor(private readonly title: string, private duration: number) { }
  todos: { title: string; description?: string | undefined; state: "done" | "not-done"; }[] = [];

  play(): Observable<number> {
    return this.timeSubject.asObservable();
  };
  stop() { return this.timeSubject.asObservable(); };


}
