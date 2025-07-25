import Nat "mo:base/Nat";
import Principal "mo:base/Principal";

actor VoterRegistry {
  private var eligibleVoters : [Principal] = [];

  public func addVoter(voter : Principal) : async () {
    if (!isVoterRegistered(voter)) {
      eligibleVoters := Array.append<Principal>(eligibleVoters, [voter]);
    };
  };

  public func removeVoter(voter : Principal) : async () {
    eligibleVoters := Array.filter<Principal>(
      eligibleVoters,
      func(p : Principal) : Bool { p != voter }
    );
  };

  public query func isEligible(voter : Principal) : async Bool {
    return isVoterRegistered(voter);
  };

  private func isVoterRegistered(voter : Principal) : Bool {
    for (v in eligibleVoters.vals()) {
      if (v == voter) {
        return true;
      };
    };
    false;
  };
};
