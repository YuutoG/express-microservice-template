const HttpStatusCodes = {
  /**
     * Esta respuesta provisional indica que todo hasta ahora está bien y
     * que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.
  */
  CONTINUE: 100,
  /**
   * Este código se envía en respuesta a un encabezado de solicitud Upgrade (en-US)
   * por el cliente e indica que el servidor acepta el cambio de protocolo propuesto por el
   * agente de usuario.
   */
  SWITCHING_PROTOCOL: 101,
  /**
   * Este código indica que el servidor ha recibido la solicitud y aún se encuentra procesandola,
   * por lo que no hay respuesta disponible.
   */
  PROCESSING: 102,
  /**
   * Este código de estado está pensado principalmente para ser usado con el encabezado Link,
   * permitiendo que el agente de usuario empiece a pre-cargar recursos mientras
   * el servidor prepara una respuesta.
   */
  EARLY_HINTS: 103,
  /**
   * La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP.
   */
  OK: 200,
  /**
   * La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello.
   * Ésta es típicamente la respuesta enviada después de una petición PUT.
   */
  CREATED: 201,
  /**
   * La solicitud se ha recibido, pero aún no se ha actuado. Es una petición "sin compromiso",
   * lo que significa que no hay manera en HTTP que permite enviar una respuesta asíncrona que
   * indique el resultado del procesamiento de la solicitud.
   * Está pensado para los casos en que otro proceso o servidor maneja la solicitud,
   * o para el procesamiento por lotes.
   */
  ACCEPTED: 202,
  /**
   * La petición se ha completado con éxito,
   * pero su contenido no se ha obtenido de la fuente originalmente solicitada,
   * sino que se recoge de una copia local o de un tercero. Excepto esta condición,
   * se debe preferir una respuesta de 200 OK en lugar de esta respuesta.
   */
  NON_AUTHORITATIVE_INFORMATION: 203,
  /**
   * La petición se ha completado con éxito pero su respuesta no tiene ningún contenido,
   * aunque los encabezados pueden ser útiles.
   * El agente de usuario puede actualizar sus encabezados en caché para este recurso con los nuevos valores.
   */
  NO_CONTENT: 204,
  /**
   * La petición se ha completado con éxito, pero su respuesta no tiene contenidos y además,
   * el agente de usuario tiene que inicializar la página desde la que se realizó la petición,
   * este código es útil por ejemplo para páginas con formularios cuyo contenido debe borrarse
   * después de que el usuario lo envíe.
   */
  RESET_CONTENT: 205,
  /**
   * La petición servirá parcialmente el contenido solicitado.
   * Esta característica es utilizada por herramientas de descarga como wget para continuar
   * la transferencia de descargas anteriormente interrumpidas,
   * o para dividir una descarga y procesar las partes simultáneamente.
   */
  PARTIAL_CONTENT: 206,
  /**
   * Una respuesta Multi-Estado transmite información sobre varios recursos en situaciones
   * en las que varios códigos de estado podrían ser apropiados. El cuerpo de la petición es un mensaje XML.
   */
  MULTI_STATUS: 207,
  /**
   * El listado de elementos DAV ya se notificó previamente, por lo que no se van a volver a listar.
   */
  ALREDY_REPORTED: 208,
  /**
   * El servidor ha cumplido una petición GET para el recurso y la respuesta es una representación
   * del resultado de una o más manipulaciones de instancia aplicadas a la instancia actual.
   */
  IM_USED: 209,
  /**
   * Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.
   */
  BAD_REQUEST: 400,
  /**
   * Es necesario autenticar para obtener la respuesta solicitada.
   * Esta es similar a 403, pero en este caso, la autenticación es posible.
   */
  UNATHORIZED: 401,
  /**
   * El cliente no posee los permisos necesarios para cierto contenido,
   * por lo que el servidor está rechazando otorgar una respuesta apropiada.
   */
  FORBIDDEN: 403,
  /**
   * El servidor no pudo encontrar el contenido solicitado.
   * Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.
   */
  NOT_FOUND: 404,
  /**
   * El método solicitado es conocido por el servidor pero ha sido deshabilitado y no puede ser utilizado.
   * Los dos métodos obligatorios, GET y HEAD,
   * nunca deben ser deshabilitados y no deberían retornar este código de error.
   */
  METHOD_NOT_ALLOWED: 405,
  /**
   * Esta respuesta es enviada cuando el servidor,
   * después de aplicar una negociación de contenido servidor-impulsado,
   * no encuentra ningún contenido seguido por la criteria dada por el usuario.
   */
  NOT_ACCEPTED: 406,
  /**
   * Esto es similar al código 401, pero la autenticación debe estar hecha a partir de un proxy.
   */
  PROXY_AUTHENTICATION_REQUIRED: 407,
  /**
   * Esta respuesta puede ser enviada cuando una petición tiene conflicto con el estado actual del servidor.
   */
  CONFLICT: 409
}

export default HttpStatusCodes
