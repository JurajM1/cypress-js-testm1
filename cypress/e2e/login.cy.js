import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Testing the login page POP", () => {
  beforeEach("Go to page GOIT", () => {
    loginPage.navigate();
  });

  it("Test1: should login and log out with user888@gmail.com", () => {
    // login
    loginPage.login("user888@gmail.com", "1234567890");
    // Można dodać dodatkowe asercje, aby sprawdzić, czy logowanie się powiodło
  });

  it("Test2: should login and log out with testowyqa@qa.team", () => {
    // login
    loginPage.login("testowyqa@qa.team", "QA!automation-1");
    // Można dodać dodatkowe asercje, aby sprawdzić, czy logowanie się powiodło
  });

  afterEach("logout", () => {
    homePage.logout();
  });
});
