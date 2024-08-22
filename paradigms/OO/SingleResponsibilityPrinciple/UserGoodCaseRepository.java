package paradigms.OO.SingleResponsibilityPrinciple;

import java.util.ArrayList;

public class UserGoodCaseRepository {
  ArrayList<UserGoodCase> users = new ArrayList<UserGoodCase>();

  /* A class that is responsible for storing users */
  public void save(UserGoodCase user) {
    this.users.add(user);
  }
}
