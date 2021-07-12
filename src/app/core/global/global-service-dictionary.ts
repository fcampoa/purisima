import { GlobalServiceMethodType } from './../support/global-service-method-type.enum';

export const GLOBAL_SERVICE_DEFINITION: any = {
  persona: {
    lista: { method: GlobalServiceMethodType.GET, url: '/lista' },
    buscar: { method: GlobalServiceMethodType.GET_BY_ID, url: '/$id' },
    agregar: { method: GlobalServiceMethodType.POST, url: '/agregar' },
    actualizar: { method: GlobalServiceMethodType.PUT, url: '/modificar' },
    eliminar: { method: GlobalServiceMethodType.DELETE, url: '/eliminar' },
    buscarNombre: { method: GlobalServiceMethodType.GET, url: '/buscarNombre/$nombre' },
    buscarApellido: { method: GlobalServiceMethodType.GET, url: '/buscarApellido/$apellido' }
  },
  constancia: {
    lista: { method: GlobalServiceMethodType.GET, url: '/lista' },
    buscar: { method: GlobalServiceMethodType.GET_BY_ID, url: '/$id' },
    agregar: { method: GlobalServiceMethodType.POST, url: '/agregar' },
    actualizar: { method: GlobalServiceMethodType.PUT, url: '/modificar' },
    eliminar: { method: GlobalServiceMethodType.DELETE, url: '/eliminar' },
    buscarPersona: { method: GlobalServiceMethodType.GET, url: '/$id'}
  }
};
