const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const rateLimit = require("express-rate-limit")
const swaggerUi = require("swagger-ui-express")
const swaggerSpecs = require("./config/swagger")
require("dotenv").config()

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")
const hostRoutes = require("./routes/hosts")
const exploreRoutes = require("./routes/explore")
const bookingRoutes = require("./routes/bookings")
const adminRoutes = require("./routes/admin")
const paymentRoutes = require("./routes/payments")

const errorHandler = require("./middleware/errorHandler")
const notFound = require("./middleware/notFound")

const app = express()

// Security middleware
app.use(helmet())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Too many requests from this IP, please try again later.",
  },
})
app.use(limiter)

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)

// Special handling for webhook routes (raw body needed)
app.use("/api/payments/webhook", express.raw({ type: "application/json" }))

// Body parsing middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))

// Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
} else {
  app.use(morgan("combined"))
}

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/huletfish", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err))

// Swagger Documentation
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, {
    explorer: true,
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "Hulet Fish Tourism API Documentation",
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      docExpansion: "none",
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
  }),
)

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hulet Fish API is running",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    documentation: "/api-docs",
  })
})

// API routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/hosts", hostRoutes)
app.use("/api/explore", exploreRoutes)
app.use("/api/bookings", bookingRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/payments", paymentRoutes)

// Error handling middleware (must be last)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Hulet Fish API server running on port ${PORT}`)
  console.log(`📱 Environment: ${process.env.NODE_ENV || "development"}`)
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || "http://localhost:3000"}`)
  console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`)
})

module.exports = app
