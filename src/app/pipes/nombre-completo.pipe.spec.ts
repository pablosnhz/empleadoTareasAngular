import { NombreCompletoPipe } from './nombre-completo.pipe';

describe('NombreCompletoPipe', () => {
  it('create an instance', () => {
    const pipe = new NombreCompletoPipe();
    expect(pipe).toBeTruthy();
  });
});
