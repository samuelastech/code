package paradigms.OO.SingleResponsibilityPrinciple;

public class UserBadCase {
  private String name;
  private String email;

  public UserBadCase(String name, String email) {
    this.email = email;
    this.name = name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void save() {
    // This is a Database operation
  }
}