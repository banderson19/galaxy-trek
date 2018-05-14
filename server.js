const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const axios = require('axios');

const SpaceshipsController = require("./controllers/SpaceshipsController");
const DestinationsController = require("./controllers/DestinationsController");

const isAuthenticated = require("./middleware/isAuthenticated");

require("dotenv").config();

const app = express();
const port = 4001;

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});


app.use(bodyParser.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENT_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
      callbackURL: process.env.AUTH_CALLBACK,
      scope: 'email profile'
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      const db = app.get("db");
      console.log(profile)
      db.get_user_by_auth_id({ auth_id: profile.emails[0].value }).then(results => {
        let user = results[0];

        if (user) {
          return done(null, user);
        } else {
          let userObj = {
            name: profile.displayName,
            auth_id: profile.emails[0].value
          };

          db.create_user(userObj).then(results => {
            let user = results[0];
            return done(null, user);
          });
        }
      });
    }
  )
);
/// create db folders to complete the logic above

passport.serializeUser((user, done) => {
  return done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const db = app.get("db");

  db.get_user_by_id({ id }).then(results => {
    let user = results[0];
    return done(null, user);
  });
});

app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/dashboard",
    failureRedirect: "http://localhost:3000/#/login"
  })
);

app.get("/auth/me", (req, res) => {
  if (req.isAuthenticated()) {
    return res.send(req.user);
  } else {

    return res.status(404).send("user not authenticated");
  }
});

app.get('/api/spaceships', SpaceshipsController.getAll)
app.post('/api/spaceships', SpaceshipsController.createSpaceship)
app.put('/api/spaceships/id', SpaceshipsController.editSpaceshipName)
app.delete('/api/spaceships/id', SpaceshipsController.delete)

app.get('/api/destinations', DestinationsController.getAll)

// app.get("/api/locations", isAuthenticated, LocationsController.get);
// app.post("/api/locations", isAuthenticated, LocationsController.create);
// app.delete('/api/locations/:id', isAuthenticated, LocationsController.delete);

app.listen(port, () => {
  console.log("listening on port", port);
});