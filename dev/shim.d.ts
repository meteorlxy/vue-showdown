declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  const comp: DefineComponent;
  export default comp;
}
