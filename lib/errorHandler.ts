import * as Sentry from "@sentry/nextjs"

export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode = 500,
    public isOperational = true,
  ) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = Error.name
    Error.captureStackTrace(this)
  }
}

export const handleError = (err: Error | AppError) => {
  if (err instanceof AppError && err.isOperational) {
    console.error("Operational error:", err)
  } else {
    console.error("Unhandled error:", err)
    Sentry.captureException(err)
  }
}

export const asyncHandler = (fn: Function) => {
  return async (req: any, res: any, next: Function) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

