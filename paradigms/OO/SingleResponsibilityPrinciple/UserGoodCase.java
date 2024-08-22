package paradigms.OO.SingleResponsibilityPrinciple;

public class UserGoodCase {
  private String name;
  private String email;

  public UserGoodCase(String name, String email) {
    this.email = email;
    this.name = name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setEmail(String email) {
    this.email = email;
  }
}