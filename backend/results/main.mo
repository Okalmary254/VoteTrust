import Nat "mo:base/Nat";

actor Results {
  // Placeholder canister to serve public data later
  // In a real system, it could aggregate results from Voting canister
  public query func healthCheck() : async Text {
    return "Results Canister is Live ✅";
  };
};
