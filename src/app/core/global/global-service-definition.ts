import * as VERBS from './../support/VERBS';
export interface IGlobalServiceDefinition {
  persona?: {
    agregar: () => VERBS.IpostCall;
    modificar: () => VERBS.IPutCall;
    buscar: () => VERBS.IGetByIdCall;
    lista: () => VERBS.IGetCall;
    eliminar: () => VERBS.IDeleteCall;
    buscarNombre: (nombre: string) => VERBS.IGetCall;
    buscarApellido: (apellido: string) => VERBS.IGetCall;
  };
  constancia?: {
    agregar: () => VERBS.IpostCall;
    modificar: () => VERBS.IPutCall;
    buscar: () => VERBS.IGetByIdCall;
    lista: () => VERBS.IGetCall;
    eliminar: () => VERBS.IDeleteCall;
    buscarPersona: (id: number) => VERBS.IGetCall;
  }
}
