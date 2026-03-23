import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";

actor {
  type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    category : Text;
    price : Int;
  };

  module MenuItem {
    public func compare(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Int.compare(item1.id, item2.id);
    };
  };

  type BusinessInfo = {
    name : Text;
    address : Text;
    phone : Text;
    hours : Text;
    aboutText : Text;
  };

  type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
  };

  let menuItems = Map.empty<Nat, MenuItem>();
  var menuItemCount = 0;

  var businessInfo : BusinessInfo = {
    name = "JAVA POINT Cafe";
    address = "123 Main St, Example City";
    phone = "(123) 456-7890";
    hours = "Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 5pm";
    aboutText = "JAVA POINT Cafe offers a cozy atmosphere and a variety of coffees, teas, and pastries. Come relax and enjoy our exceptional service.";
  };

  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  var contactSubmissionCount = 0;

  public shared ({ caller }) func addMenuItem(name : Text, description : Text, category : Text, price : Int) : async Nat {
    let id = menuItemCount;
    let menuItem : MenuItem = {
      id;
      name;
      description;
      category;
      price;
    };
    menuItems.add(id, menuItem);
    menuItemCount += 1;
    id;
  };

  public shared ({ caller }) func updateMenuItem(id : Nat, name : Text, description : Text, category : Text, price : Int) : async () {
    let menuItem : MenuItem = {
      id;
      name;
      description;
      category;
      price;
    };
    if (not menuItems.containsKey(id)) { Runtime.trap("Menu item does not exist.") };
    menuItems.add(id, menuItem);
  };

  public shared ({ caller }) func deleteMenuItem(id : Nat) : async () {
    if (not menuItems.containsKey(id)) { Runtime.trap("Menu item does not exist.") };
    menuItems.remove(id);
  };

  public query ({ caller }) func getMenu() : async [MenuItem] {
    menuItems.values().toArray().sort();
  };

  public shared ({ caller }) func updateBusinessInfo(name : Text, address : Text, phone : Text, hours : Text, aboutText : Text) : async () {
    businessInfo := {
      name;
      address;
      phone;
      hours;
      aboutText;
    };
  };

  public query ({ caller }) func getBusinessInfo() : async BusinessInfo {
    businessInfo;
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Nat {
    let id = contactSubmissionCount;
    let submission : ContactSubmission = {
      name;
      email;
      message;
    };
    contactSubmissions.add(id, submission);
    contactSubmissionCount += 1;
    id;
  };

  public query ({ caller }) func getContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };
};
