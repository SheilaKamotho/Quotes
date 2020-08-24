import { DateCountPipe } from './date-count.pipe';

describe('DayCountPipe', () => {
  it('create an instance', () => {
    const pipe = new DateCountPipe();
    expect(pipe).toBeTruthy();
  });
});
