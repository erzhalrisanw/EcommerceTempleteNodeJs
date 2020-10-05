exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    PageTitle: "Page Not Found",
    path: "/404",
    isAuthenticated: req.session.isLoggedIn
  });
};

exports.get500 = (req, res, next) => {
  res.status(500).render("500", {
    PageTitle: "Server Error!!",
    path: "/500",
    isAuthenticated: req.session.isLoggedIn
  });
};
