const brandConnection = {
  aBrandID: "beehive-corporation",
  bBrandName: "Beehive Corporation",

  cFrontendApplicationName: "Beehive Frontend",
  dAdministrationApplicationName: "Beehive Administration",
  eBackendApplicationName: "Beehive Backend",

  fFrontendApplicationURL: "https://beehive-frontend.netlify.app",
  gAdminApplicationURL: "https://beehive-admin.netlify.app",
  hBackendApplicationURL: "https://beehive-backend.netlify.app",

  iEmailName: "@beehive.com",

  jInstagramURL: "https://www.google.com",
  kXURL: "https://www.google.com",
  lThreadsURL: "https://www.google.com",
  mLinkedinURL: "https://www.google.com",
  nGithubURL: "https://www.google.com",

  get oBackendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "https://booooooring-beehive-backend.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.tFrontendProductionURL
      : this.sFrontendLocalURL;
  },
  sFrontendLocalURL: "http://localhost:5173",
  tFrontendProductionURL: "https://beehive-corp-frontend.netlify.app",

  uTagName: "Infinte Wonder Awaits",
}

export default brandConnection;
