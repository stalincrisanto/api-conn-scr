import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(GlobalExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: HttpStatus;
    let message: string;
    let errorCode: string;
    let details: any;

    // Manejar diferentes tipos de excepciones
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (typeof exceptionResponse === 'object') {
        const responseObj = exceptionResponse as any;
        message = responseObj.message || exception.message;
        details = responseObj.error || responseObj.details;
      } else {
        message = exception.message;
      }
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Error interno del servidor';
      
      // Manejar errores específicos de negocio
      if (exception.message === 'ACCOUNT_NOT_FOUND') {
        status = HttpStatus.NOT_FOUND;
        message = 'Cuenta no encontrada';
        errorCode = 'ACCOUNT_NOT_FOUND';
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Error interno del servidor';
    }

    // Log del error
    this.logger.error(
      `Error en ${request.method} ${request.url}: ${message}`,
      exception instanceof Error ? exception.stack : undefined,
    );

    // Respuesta estructurada
    const errorResponse = {
      success: false,
      error: {
        code: errorCode || `HTTP_${status}`,
        message,
        details,
        timestamp: new Date().toISOString(),
        path: request.url,
      },
    };

    response.status(status).json(errorResponse);
  }
}