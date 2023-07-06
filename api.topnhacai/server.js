const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const fileUpload = require("express-fileupload");

// bring routes
const userRoutes = require("./routers/user.router");
const faqRoutes = require("./routers/faq.router");
const dealerRoutes = require("./routers/dealer.router");
const dealerInforRoutes = require("./routers/dealerInfor.router");
const dealerPaymentRoutes = require("./routers/dealerPayment.router");
const dealerPromotionRoutes = require("./routers/dealerPromotion.router");
const dealerServiceRoutes = require("./routers/dealerService.router");
const pageRoutes = require("./routers/page.router");
const postRoutes = require("./routers/post.router");
const schemaRoutes = require("./routers/schema.router");
const taxonomyRoutes = require("./routers/taxonomy.router");
const ROLE = require("./helpers/role");
const profileRoutes = require("./routers/teamProfile.router");
const linkFooterRoutes = require("./routers/linkFooter.router");
const leagueProfileRoutes = require("./routers/leagueProfile.router");
const isportRoutes = require("./routers/isport.router");
const googleRoutes = require("./routers/indexGG.router");
const bannerRoutes = require("./routers/banner.router");
const bingRoutes = require("./routers/bingIndex.router");
const domainRoutes = require("./routers/domain.router");
const googleAnalyticsRoutes = require("./routers/ggAnalytics.router");
const permissionRouter = require("./routers/permission.router");
const roleRoutes = require("./routers/role.router");
var origin_urls;
if (process.env.NODE_ENV == "development") {
  origin_urls = [
    `${process.env.CLIENT_DEV_URL}`,
    `${process.env.ADMIN_DEV_URL}`,
  ];
} else if (process.env.NODE_ENV == "production") {
  origin_urls = [
    `${process.env.CLIENT_URL}`,
    `${process.env.ADMIN_URL}`,
    `${process.env.CLIENT_DEV_URL}`,
    `${process.env.ADMIN_DEV_URL}`,
  ];
}

const corsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
    "Authorization",
  ],
  credentials: true,
  methods: "GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE",
  origin: origin_urls,
  preflightContinue: false,
};

//app
const app = express();
// app.use('/swagger', require('./helpers/swagger'))

//models
const Role = require("./models/role.model");
const User = require("./models/user.model");
//cors
app.use(cors(corsOptions));
app.use(fileUpload());
const server = require("http").createServer(app);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// middlewares
app.use(morgan("dev"));
// app.use(bodyParser.json({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db
mongoose.connect(process.env.DATABASE_CLOUD, function (err) {
  if (err) {
    console.log("Mongodb connected error");
  } else {
    console.log("Mongodb connected successfuly");
    initial();
  }
});

// port
const port = process.env.PORT || 8000;
const portServer = process.env.CLIENT_PORTSERVER || 8002;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// });
server.listen(port, () => {
  console.log(`Servers running at localhost:${port}`);
});

const portSocketIO = process.env.CLIENT_PORTSOCKETIO || 8003;
const io = require("socket.io")(portSocketIO);
// io.sockets.on('connection', (socket) => {
// //     console.log("Connected to", socket.id);
// //     socket.on('ping', (data) => {
// // console.log(data + 'Received message:');
//     //   console.log(message);
//     //   console.log(Object.keys(io.sockets.connected).length);
//     //   io.sockets.emit('pageview', { connections: Object.keys(io.sockets.connected).length - 1 });
//     });
//   });
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
io.on("connection", (socket) => {
  console.log("a user connected" + socket.id);
});

app.use("/api", userRoutes);
app.use("/api", faqRoutes);
app.use("/api", dealerRoutes);
app.use("/api", dealerInforRoutes);
app.use("/api", dealerPaymentRoutes);
app.use("/api", dealerPromotionRoutes);
app.use("/api", dealerServiceRoutes);
app.use("/api", pageRoutes);
app.use("/api", postRoutes);
app.use("/api", schemaRoutes);
app.use("/api", taxonomyRoutes);
app.use("/api", profileRoutes);
app.use("/api", linkFooterRoutes);
app.use("/api", leagueProfileRoutes);
app.use("/api", isportRoutes);
app.use("/api", googleRoutes);
app.use("/api", bannerRoutes);
app.use("/api", bingRoutes);
app.use("/api", domainRoutes);
app.use("/api", googleAnalyticsRoutes);
app.use("/api", roleRoutes);
app.use("/api", permissionRouter);
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Libary API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://api.topnhacai.com",
        description: "My API Documentation",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          name: "Authorization",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
        responses: {
          UnauthorizedError: {
            description:
              "Access token is missing or invalid, or the user does not have access to perform the action",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Unauthorized",
                    },
                  },
                },
              },
            },
          },
          NotFoundError: {
            description: "Not Found",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: {
                      type: "string",
                      example: "Not Found",
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ["./routers/*.router.js"],
};
const specs = swaggerJsDoc(options);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(specs));
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "Editor", // bien tap vien
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Editor' to roles collection");
      });

      new Role({
        name: "Collaborators", //cộng tác viên
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Collaborators' to roles collection");
      });

      new Role({
        name: "Admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'Admin' to roles collection");
      });
    }
  });

  User.estimatedDocumentCount((err, count) => {
    if (!err && count == 0) {
      new User({
        firstName: "Test",
        lastName: "Test",
        username: "admin",
        passwordHash: bcrypt.hashSync("123123", 10),
        role: ROLE.Admin,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("add user admin");
      });
      new User({
        firstName: "Cộng tác viên",
        lastName: "",
        username: "ctvseo123",
        passwordHash: bcrypt.hashSync("123123", 10),
        role: ROLE.Collaborators,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("add user Collaborators");
      });
      new User({
        firstName: "Biên tập viên",
        lastName: "",
        username: "btvseo123",
        passwordHash: bcrypt.hashSync("123123", 10),
        role: ROLE.Editor,
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }
        console.log("add user Editor");
      });
    }
  });
}
initial;
