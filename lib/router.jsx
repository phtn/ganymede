FlowRouter.route("/", {
  name: "Home",
  action(params) {
    renderLayoutWith(<Home />)
  }
});

FlowRouter.route('/login', {
  name: "Login",
  action(params) {
    renderLayoutWith(<Login />)
  }
});

FlowRouter.route('/profile', {
  name: "Profile",
  action(params) {
    renderLayoutWith(<Profile />)
  }
});

function renderLayoutWith(component) {
  ReactLayout.render(Layout, {
    header: <Header />,
    content: component,
    footer: <Footer />
  })
}
