import Boom from 'boom';

const ERROR_TYPE = {
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
  UNAUTHORIZED: 'UNAUTHORIZED',
  SERVER_UNAVAILABLE: 'SERVER_UNAVAILABLE',
  BAD_IMPLEMENTATION: 'BAD_IMPLEMENTATION'
};

const ERROR_DETAIL = {
  BAD_REQUEST: {
    message: 'You are not authorized to make this request.'
  },
  UNAUTHORIZED: {
    message: 'You are not authenticated to make this request.'
  },
  FORBIDDEN: {
    message: 'Invalid Type'
  },
  NOT_FOUND: {
    message: 'Not Found'
  },
  SERVER_UNAVAILABLE: {
    message: 'Server not available.'
  },
  BAD_IMPLEMENTATION: {
    message: 'Bad implementation in server'
  }
};

const boomError = (error, message = '') => {
  switch (error) {
    case ERROR_TYPE.BAD_REQUEST:
      throw new Boom.badRequest(ERROR_DETAIL.BAD_REQUEST.message);
    case ERROR_TYPE.UNAUTHORIZED:
      throw new Boom.unauthorized(ERROR_DETAIL.UNAUTHORIZED.message);
    case ERROR_TYPE.FORBIDDEN:
      throw new Boom.forbidden(ERROR_DETAIL.FORBIDDEN.message);
    case ERROR_TYPE.NOT_FOUND:
      throw new Boom.notFound(ERROR_DETAIL.NOT_FOUND.message);
    case ERROR_TYPE.SERVER_UNAVAILABLE:
      throw new Boom.serverUnavailable(ERROR_DETAIL.SERVER_UNAVAILABLE.message);
    case ERROR_TYPE.BAD_IMPLEMENTATION:
      throw new Boom.badImplementation(ERROR_DETAIL.BAD_IMPLEMENTATION.message);
    default:
      throw new Boom.badImplementation(message);
  }
};

export { ERROR_TYPE, boomError };
