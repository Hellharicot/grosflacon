import { logger } from "./logger.js";
import { HTTP_STATUS } from "./http-status.js";

export function successResponse(res, data, message = "Success") {
  logger.info(message);
  return res.status(HTTP_STATUS.OK).json({
    success: message,
    data,
  });
}

export function createdResponse(res, data, message = "Created") {
  logger.info(message);
  return res.status(HTTP_STATUS.CREATED).json({
    success: message,
    data,
  });
}

export function notFound(res, customMessage = null) {
  const error = new Error();
  const callerName =
    error.stack.split("\n")[2].trim().split(" ")[1] || "Unknown";
  const message = customMessage || `${callerName} returned error: not found`;
  logger.error(message);
  return res.status(HTTP_STATUS.NOT_FOUND).json({
    error: message,
  });
}

export function serverError(res, err, customMessage = null) {
  const callerName = err.stack.split("\n")[2].trim().split(" ")[1] || "Unknown";
  const message =
    customMessage || `${callerName} returned error: internal server error`;
  logger.error(message, err);
  return res.status(HTTP_STATUS.SERVER_ERROR).json({ error: message });
}
