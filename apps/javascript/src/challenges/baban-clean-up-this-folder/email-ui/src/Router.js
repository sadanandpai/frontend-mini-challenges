import { MailList } from "./MailList.js";

const routes = [
  {
    path: "/",
    view: (root) => new MailList(root, "inbox"),
  },
  { path: "/important", view: (root) => new MailList(root, "important") },
  { path: "/sent", view: (root) => new MailList(root, "sent") },
  {
    path: "/mails/mail_csfsdfsdf",
    view: (root) => "mail content",
  },
];

const matchPathName = (path) => {
  if (path && path.includes("mails")) {
    const result = path.split("/");
    return result.length === 3;
  }
  return path === location.pathname;
};

export const router = async () => {
  const allRoutes = routes.map((route) => {
    return {
      route,
      isMatch: matchPathName(route.path),
    };
  });

  let match = allRoutes.find((route) => route.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
  }

  const root = document.querySelector(".main-app");

  match.route.view(root);
  // document.querySelector("#mail_list").innerHTML = view;
};

export const navigateTo = (route) => {
  history.pushState(null, null, route);
  router();
};
