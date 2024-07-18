export class Controller {
  /**
   * The service will only be imported when needed to use
   */
  add() {
    console.log('Loading the Service...');
    import('./Service.js').then((module) => {
      console.log('Service is loaded');
      const instance = new module.Service();
      instance.add();
    });
  }
}